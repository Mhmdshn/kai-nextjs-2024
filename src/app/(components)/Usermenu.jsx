'use client'
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";

export const Usermenu = () => {
  const { data: session } = useSession();
  const isLoggedIn = false;
  const user = null;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleSignOut = async () => {
    try {
      //await logOut();
      localStorage.clear();
      router.push("/", { scroll: false });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, []);


  if (session && session.user) {
    return (
      <div className={`relative group sm:flex`}>
        <img
          onClick={toggleMenu}
          src={user !== null &&
            user?.gender === "m"
            ? "man.png"
            : user?.gender === "f"
              ? "woman.png"
              : "man.png"
          }
          alt=""
          className="w-8 h-8 mx-auto rounded-full object-cover cursor-pointer border p-0.5 m-1"
        />
        {session?.user !== null && <small className="text-green text-xs absolute">{user?.name}</small>}
        {isMenuOpen && (
          <div className="absolute right-0 mt-5 p-2 rounded-lg bg-white shadow-lg">
            <p><p className="text-sky-600">{session.user.name}</p></p>
            <button className="block w-full text-left text-gray-700 hover:bg-gray-200 py-1 px-2">
              My Profile
            </button>
            <button className="block w-full text-left text-gray-700 hover:bg-gray-200 py-1 px-2">
              Settings
            </button>
            <button onClick={() => signOut()} className="text-red-600">
              Sign Out
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className="text-white ml-auto m-2">
      <FaRegUserCircle size={25} />
    </button>
  );
};
