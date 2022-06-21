import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";

function home() {
    const { data: session, status } = useSession();
    console.log(session);
    return (
        <div className=' bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593] p-5 w-64 h-[100vh] flex flex-col items-center justify-evenly' >
            <div className=' h-full text-gray-700'>
                {session ? (
                    <div>
                        <img
                            src={session.user?.image}
                            className="h-24 w-24 rounded-full"
                        />
                        <h1>{session.user?.name}</h1>
                        <button
                            onClick={() => signOut({ callbackUrl: "/login" })}
                            className="bg-white text-md md:px-5 md:py-2 md:text-lg lg:px-8 py-3 rounded-full text-gray-800  font-regular"
                        >
                            sign out
                        </button>
                    </div>
                ) : (
                    <h1>You are not signed in. Redirecting...</h1>
                )}

            </div>

        </div>
    )
}

export default home