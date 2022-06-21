import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { AiOutlineGitlab } from "react-icons/ai";
import { useRouter } from "next/router";

function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const providers = [
    {
      name: "github",
      Icon: <BsGithub size={25} />,
    },
    {
      name: "gitlab",
      Icon: <AiOutlineGitlab size={25} />,
    },
    {
      name: "google",
      Icon: <BsGoogle size={25} />,
    },
  ];

  const icon = `BsGithub`;
  const handleOAuthSignIn = (provider) => () =>
    signIn(provider, { callbackUrl: "/home" });

  return (
    <div className="h-screen gradient-form bg-gray-200 md:h-screen justify-center flex items-center">
      <div className="container px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 ">
                  <div className="p-12 md:mx-6">
                    <div className="text-center">
                      <h4 className="text-5xl font-bold mt-1 mb-12 pb-1 ">
                        DevFinder
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4 font-semibold text-center text-lg">
                        Please login to your account
                      </p>
                      <div className="pt-1 mb-12 pb-1">
                        {providers.map(({ name, Icon }) => (
                          <button
                            className="flex items-center justify-center px-6 py-2.5 text-white font-medium text-lg leading-tight rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full mb-3 bg-[#ee7724] hover:bg-[#b44593] "
                            type="button"
                            onClick={handleOAuthSignIn(name)}
                          >
                            Log in using {name} &nbsp;
                            {Icon}
                          </button>
                        ))}
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none  bg-gradient-to-r from-[#ee7724] via-[#d8363a] to-[#b44593]">
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-3xl font-semibold mb-6">
                      Welcome to DevFinder
                    </h4>
                    <p className="text-lg">
                      A place where developers can meet and share their ideas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
