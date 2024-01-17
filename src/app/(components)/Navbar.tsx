import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { Usermenu } from "@/app/(components)/usermenu";
import {
  FaAddressCard,
  FaBell,
  FaBookmark,
  FaClipboardCheck,
  FaHome,
} from "react-icons/fa";

const Navbar = async () => {
  const session = await getServerSession(options);
  //const session = getServerSession(options);
  //const session = "ok";

  return (
    <nav className="bg-blue-800 px-4 fixed w-full rounded-b-xl mb-3">
      <div className="flex items-center justify-between gap-5">
        <Link
          href={"/"}
          className=" text-white hover:text-cyan-200 hover:rotate-3"
        >
          <FaHome size={25} />
        </Link>
        <Link
          href={"/saved"}
          className=" text-white hover:text-cyan-200 hover:rotate-3"
        >
          <FaBookmark size={20} />
        </Link>
        {!session ? (
          <Link
            href={"/createprofile"}
            className=" text-white hover:text-cyan-200"
          >
            <FaAddressCard />
          </Link>
        ) : (
          <Link
            href={"/myprofile"}
            className=" text-white hover:text-cyan-200  hover:rotate-3"
          >
            <FaClipboardCheck size={20} />
          </Link>
        )}
        {session && (
          <Link
            href={"/requests"}
            className=" text-white hover:text-cyan-200  hover:rotate-3"
          >
            {" "}
            <FaBell size={20} />
          </Link>
        )}

        {}

        {/* Add a button to toggle the menu on small devices */}

        {/* Add a class to control visibility of menu on larger screens */}
        <Usermenu />
      </div>
    </nav>
  );
};

export default Navbar;
