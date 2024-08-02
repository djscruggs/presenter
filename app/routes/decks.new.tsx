import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";

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
    <div className="flex flex-col items-start min-h-screen h-full">
      <h1 className="text-3xl">New Deck</h1>
    </div>
  )
}