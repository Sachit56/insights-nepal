"use client";

import React from "react";

export default function Footer() {
  return (
    <div>
      <div>
        <footer className="flex justify-center px-4 text-gray-800 bg-white">
          <div className="container px-6 py-6">
            <h1 className="text-lg font-bold text-center lg:text-2xl">
              Join 31,000+ others and never miss <br /> out on new tips,
              tutorials, and more.
            </h1>

            <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border-2 border-black focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="hover:bg-[#cfc3fb] hover:text-black text-black px-3 py-1 border border-black rounded-none m-2">
                Subscribe
              </button>
            </div>

            <hr className="h-px bg-black border-none my-7" />

            <div className="flex flex-col items-center justify-between md:flex-row">
              <a href="#">
                {/* <img
                  className="w-auto h-7"
                  src="https://merakiui.com/images/full-logo.svg"
                  alt=""
                /> */}

                All Rights Reserved
              </a>

              <div className="flex mt-4 md:m-0">
                <div className="-mx-4">
                  <a
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    GITHUB
                  </a>
                  <a
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    NCIT
                  </a>
                  <a
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    TWITTER
                  </a>
                  {/* <a
                    href="#"
                    className="px-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline"
                  >
                    Contact
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
