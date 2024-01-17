"use client";
import { useSession } from "next-auth/react";
import Posts from "./(components)/Posts";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="">
      <section id="top" className="bg-cyan-200 h-7 mb-3 w-full text-wrap">
        Welcome {session?.user?.name}
      </section>

      <section id="middle" className="bg-green-700 h-screen">
        <Posts />
      </section>

      <section id="bottom">bottom</section>
    </main>
  );
}
