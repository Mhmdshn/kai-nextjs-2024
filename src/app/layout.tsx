import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./contexts/AuthContext";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import Nav from "./(components)/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kaiApp2024",
  description: "by Mohamed Shaan Ahmed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = `flex flex-col h-screen justify-between`;
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className + " " + styles}>
          <header className="h-10 mb-16">
            <Navbar />
          </header>
          <main className="mb-auto h-auto">{children}</main>
          <footer className="h-10 bg-blue-500 fixed bottom-0 w-full">
            <Footer />
          </footer>
        </body>
      </AuthContextProvider>
    </html>
  );
}
