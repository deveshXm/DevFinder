import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  //session will give email id and repository names

  const { data: session, status } = useSession();
  console.log(session);
  const router = useRouter();
  if (!session && typeof session != "undefined") {
    router.push(`/login`);
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {session ? (
          <div>
            <h1>you are signed in as {session.user?.email}</h1>
            {/* Redirect to login page if sign out is clicked */}
            <button onClick={() => signOut({ callbackUrl: "/login" })} className='border border-black p-2 rounded'>
              sign out
            </button>
          </div>
        ) : (
          <h1>you are not signed in</h1>
        )}
      </main>
    </div>
  );
};

export default Home;
