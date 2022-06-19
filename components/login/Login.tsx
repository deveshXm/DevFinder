import React from "react";

function Login() {
  return (
    <div className="container px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-6/12 ">
                <div className="p-12 md:mx-6">
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                      DevFinder
                    </h4>
                  </div>
                  <form>
                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                        className="px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg transition duration-300 ease-in-out w-full mb-3 bg-[#ee7724] hover:bg-[#b44593]"
                        type="button"
                      >
                        Log in
                      </button>
                      <a className="text-gray-500" href="#!">
                        Forgot password?
                      </a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-black text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        Sign Up Now
                      </button>
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
  );
}

export default Login;
