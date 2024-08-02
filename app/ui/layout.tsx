import { useContext, useState, useEffect } from "react"
import { CurrentUserContext } from "~/utils/CurrentUserContext"
import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react"
import { UserButton } from "@clerk/remix"
import NavLinks from "./navlinks"
import { ErrorBoundary } from "./errorBoundary"
export default function Layout({ children }: { children: React.ReactNode }) {
  const { currentUser } = useContext(CurrentUserContext)
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if(theme === 'light'){
      document.documentElement.classList.add('dark')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setTheme('light')
    }
  }
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }, [])
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="relative min-h-screen min-w-screen">
          {currentUser &&
            <div className="absolute right-4 top-4">
              <UserButton/>
            </div>
          }
        <div className="flex pt-4">
          {currentUser && 
            <div className="flex w-[200px] flex-col mr-8">
              <NavLinks theme={theme} toggleTheme={toggleTheme} />
            </div>
          }
          <div className="flex-1">
            {children}
          </div>
        </div> 
        
        </div>
        
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}