import React from "react";
import Maxwithwrapper from "./Maxwithwrapper";
import Link from "next/link";
import { Icons } from "./Icons";
import Navitems from "./Navitems";

const Navbar = () => {
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
            </div>
          </div>
        </Maxwithwrapper>
      </div>
    </div>
  );
};

export default Navbar;
