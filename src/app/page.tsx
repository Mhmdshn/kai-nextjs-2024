"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="">
      <section id="top" className="bg-cyan-200 h-7 mb-3 w-full text-wrap">
        Welcome {session?.user?.name}, Role: {session?.user?.role}
      </section>

      <section id="middle" className="bg-green-700 h-screen">
        <div className="w-1/2">body {JSON.stringify(session)}</div>
      </section>

      <section id="bottom">bottom</section>
    </main>
  );
}
