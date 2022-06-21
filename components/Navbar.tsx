import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="fixed w-full top-0 z-10 shadow bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <h1 className="text-3xl font-medium text-gray-700">DevFinder</h1>
            <div className="">

              <div className="hidden md:block">
                <div className=" flex items-baseline space-x-8">
                  <Link
                    className=" text-black px-5 py-2 rounded-md text-lg font-regular mr-4"
                    href="/"
                  >
                    Home
                  </Link>

                  <Link
                    href="/explore"
                    className="text-black px-5 py-2 rounded-md text-lg font-regular"
                  >
                    Explore
                  </Link>

                  {/* <Link
                    href="/"
                    className="text-black px-5 py-2 rounded-md text-lg font-regular"
                  >
                    Products
                  </Link>

                  <Link
                    href="/"
                    className="text-black px-5 py-2 rounded-md text-lg font-regular"
                  >
                    About us
                  </Link>

                  <Link
                    href="/"
                    className="text-black px-5 py-2 rounded-md text-lg font-regular"
                  >
                    Contact us
                  </Link> */}
                  <button className="bg-[#ee7724] px-8 py-3 rounded-full text-white text-lg font-regular">
                    <Link
                      href="/login"
                    >Sign In
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <hr/>
                <div className=" text-black block px-3 py-2 rounded-md text-lg font-regular">
                  <Link href="/">
                    Home
                  </Link>
                </div>
                <div className=" text-black block px-3 py-2 rounded-md text-lg font-regular">
                  <Link href="/explore">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;