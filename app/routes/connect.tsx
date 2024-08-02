import { GoogleOAuthProvider , GoogleLogin } from '@react-oauth/google';
import {useLoaderData} from '@remix-run/react';
import { LoaderFunction, redirect } from "@remix-run/node"
import { getAuth } from "@clerk/remix/ssr.server";

export const loader: LoaderFunction = async (args) => {  
  const user = await getAuth(args);
  console.log("user", user)
  const { userId } = user
  if (!userId) {
    return redirect("/login");
  }  
  return {
    clientId: process.env.GOOGLE_CLIENT_ID,
  };
}

export default function Connect() {
  const { clientId } = useLoaderData<typeof loader>();
  return (
    <div className="flex justify-center items-center h-screen">
      <GoogleOAuthProvider clientId={clientId}>
      <div className="w-[200px] border bg-gray-200 rounded-full">
        <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}
