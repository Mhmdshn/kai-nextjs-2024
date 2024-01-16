import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="">
      <nav className="bg-blue-600 text-gray-100 fixed mb-10 flex justify-between items-center w-full px-5 py-4">
        <div>kaiApp</div>
        <div className="flex gap-4">
          <Link href="/">
            <FaHome size={25} />
          </Link>
          <Link href="/">Admin</Link>
          <Link href="/">Premium</Link>
          <Link href="/">Free</Link>
          <Link href="/">Public</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
