import { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
          fill="white"
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      )}

      <div
        className={`top-0 right-0 w-[35vw] bg-teal-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <Link href='/portfolio'><h3 className="mt-20 text-4xl font-semibold text-white dark:md:hover:text-sky-400">
          Portfolio
        </h3></Link>
        <Link href='/aboutme'><h3 className="mt-20 text-4xl font-semibold text-white dark:md:hover:text-sky-400">
          Resume
        </h3></Link>
        <Link href='/aboutme'><h3 className="mt-20 text-4xl font-semibold text-white dark:md:hover:text-sky-400">
          Blog
        </h3></Link>
        <Link href='/aboutme'><h3 className="mt-20 text-4xl font-semibold text-white dark:md:hover:text-sky-400">
          About Me
        </h3></Link>
      </div>
    </>
  );
};

export default Navbar;