import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node"
import "./tailwind.css"
import { rootAuthLoader } from "@clerk/remix/ssr.server"
import { ClerkApp } from "@clerk/remix"
export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="h-screen w-screen bg-slate-100">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />
}
export default ClerkApp(App);
