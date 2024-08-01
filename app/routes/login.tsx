import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/remix";
import { LoaderFunction, redirect } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";


export const loader: LoaderFunction = async (args) => {
  const user = await getAuth(args);
  if(user.userId){
    return redirect("/home");
  }
  return {};
}
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignedIn>
        <p>You are signed in!</p>
        <div>
          <p>View your profile here</p>
          <UserButton />
        </div>
        <div>
          <SignOutButton />
        </div>
      </SignedIn>
      <SignedOut>
        <p>You are signed out</p>
        <div>
          <SignInButton />
        </div>
        <div>
          <SignUpButton />
        </div>
      </SignedOut>
    </div>
  )
}