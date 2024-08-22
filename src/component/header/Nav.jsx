// import React, { useState } from "react";
const Nav = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="font-bold text-white">Your Logo</h1>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a href="#" className="text-white hover:text-gray-400">
                Home
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                About
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
