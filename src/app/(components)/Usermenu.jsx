'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/app/contexts/AuthContext";

export const Usermenu = () => {
  const { user, isLoggedIn } = UserAuth();
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

  return (
    <div className={`relative group sm:flex`}>
      <img
        onClick={toggleMenu}
        src={
          user?.gender === "m"
            ? "man.png"
            : user?.gender === "f"
              ? "woman.png"
              : "man.png"
        }
        alt=""
        className="w-8 h-8 mx-auto rounded-full object-cover cursor-pointer border p-0.5 m-1"
      />
      {<small className="text-green text-xs absolute">{user.name}</small>}
      {isMenuOpen && (
        <div className="absolute right-0 mt-5 p-2 rounded-lg bg-white shadow-lg">
          <button className="block w-full text-left text-gray-700 hover:bg-gray-200 py-1 px-2">
            My Profile
          </button>
          <button className="block w-full text-left text-gray-700 hover:bg-gray-200 py-1 px-2">
            Settings
          </button>
          <button
            onClick=""
            className="block w-full text-left text-red-600 hover:bg-gray-200 py-1 px-2"
          >
            <a href="/api/auth/signout?callbackUrl=/">Logout</a>
          </button>
        </div>
      )}
    </div>
  );
};
