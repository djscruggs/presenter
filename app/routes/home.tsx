import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const loader: LoaderFunction = async (args) => {
  const user = await getAuth(args);
  console.log("user", user)
  const { userId } = user
  if (!userId) {
    return redirect("/login");
  }
  return {};
}
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link className="block text-blue-500 hover:text-red-500 underline" to="/connect">
        Connect Google Slides
      </Link>
      <Link className="block text-blue-500 hover:text-red-500 underline" to="/decks/new">
        Create a new deck
      </Link>

      <h1 className="text-3xl">Hello world</h1>
    </div>
  )
}