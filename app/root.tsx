import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
import { useState ,useContext } from "react"
import { LoaderFunction } from "@remix-run/node"
import "./tailwind.css"
import { rootAuthLoader } from "@clerk/remix/ssr.server"
import { ClerkApp , UserButton } from "@clerk/remix"
import { CurrentUserContext } from "./utils/CurrentUserContext"
import { type CurrentUser } from "~/models/types"
import { getUserByClerkId } from "~/models/user.server"

export const loader: LoaderFunction = async args => {
  return await rootAuthLoader(args, async ({ request }) => {
    const auth = request.auth
    if (auth?.userId) {
      const user: CurrentUser = await getUserByClerkId(auth.userId)
      if (!user) {
        return { user: null, auth: null }
      }
      return { user, auth }
    }
    return { user: null, auth: null }
  })
}

function App() {
  const { user } = useLoaderData<{ user: CurrentUser }>()
  
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(user as CurrentUser)
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Layout>
        <Outlet />
      </Layout>
    </CurrentUserContext.Provider>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { currentUser } = useContext(CurrentUserContext)
  return (
    <html lang="en">
      
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="relative h-screen w-screen bg-slate-100">
          {currentUser &&
          <div className="absolute right-4 top-4">
            <UserButton/>
          </div>
          } 
        {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
export default ClerkApp(App);