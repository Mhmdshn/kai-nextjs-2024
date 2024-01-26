

import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import Nav from "./(components)/Nav";
import Providers from "./(components)/Providers";
import Appbar from "./(components)/Appbar";
import { ReactNode } from "react";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kaiApp2024",
  description: "by Mohamed Shaan Ahmed",
};

// Use RootType as a generic parameter for the RootLayout component
export default function RootLayout({ children }) {
  const styles = `flex flex-col h-screen justify-between`;
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className + " " + styles}>
          <header className="h-10 mb-10">
            <Navbar />
          </header>
          <main className="mb-auto h-auto">{children}</main>
          <footer className="h-10 bg-blue-500 fixed bottom-0 w-full">
            <Footer />
          </footer>
        </body>
      </Providers>
    </html>
  );
}