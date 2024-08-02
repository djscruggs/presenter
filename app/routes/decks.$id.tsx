import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import deck from "~/mocks/deck";
import Slide from "~/components/slide";

export const loader: LoaderFunction = async (args) => {
  const user = await getAuth(args);
  const { userId } = user
  if (!userId) {
    return redirect("/login");
  }
  return {};
}
export default function Deck() {
  const slides = deck.slides
  return (
    <div className="flex flex-col items-start h-screen">
      <h1 className="text-3xl mb-8">{deck.title}</h1>
      {slides.map((slide: any) => {
        return (
          <div className='border border-black rounded-lg p-4 mb-4' key={slide.objectId}>
            <Slide json={slide} />
          </div>
        )

      })}
    </div>
  )
}