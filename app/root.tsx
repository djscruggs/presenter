import {
  Outlet,
  useLoaderData
} from "@remix-run/react";
import { useState } from "react"
import { LoaderFunction } from "@remix-run/node"
import "./tailwind.css"
import { rootAuthLoader } from "@clerk/remix/ssr.server"
import { ClerkApp } from "@clerk/remix"
import { CurrentUserContext } from "./utils/CurrentUserContext"
import { type CurrentUser } from "~/models/types"
import { getUserByClerkId } from "~/models/user.server"
import Layout  from "./ui/layout"


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


export default ClerkApp(App);