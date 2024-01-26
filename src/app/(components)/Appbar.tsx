import React from "react";
import SigninButton from "./SignInButton";
import { FaHome } from "react-icons/fa";

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <FaHome size={25} />
      <SigninButton />
    </header>
  );
};

export default Appbar;
