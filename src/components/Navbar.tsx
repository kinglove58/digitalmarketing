import React from "react";
import Maxwithwrapper from "./Maxwithwrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import Navitems from "./Navitems";
import Cart from "./Cart";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const user = null;

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <div className="relative bg-white">
        <Maxwithwrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* todo: mobile version */}
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <Navitems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end lg:space-x-6">
                  {user ? null : (
                    <Link
                      href="/sign-in"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      sign in
                    </Link>
                  )}{" "}
                  {user ? null : (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  )}
                  {user ? (
                    <p>jt</p>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      create account
                    </Link>
                  )}
                  {user ? (
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  ) : null}
                  {user ? null : (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Maxwithwrapper>
      </div>
    </div>
  );
};

export default Navbar;
