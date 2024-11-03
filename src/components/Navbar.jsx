import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className=" sticky top-0  bg-Nav w-full p-2 z-10 flex items-center justify-between md:px-12 px-5">
        <img
          src="/images/logo.png"
          className="w-[3rem] cursor-pointer "
          alt="Logo"
        />
        <a
          href="https://rihan-info.netlify.app/"
          target="_blank"
          className="bg-SideNav text-white px-3 py-1 rounded-md"
        >
          Visit My Portfolio
        </a>
      </nav>
    </>
  );
}
