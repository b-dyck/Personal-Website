import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bryce Dyck | Portfolio",
  description: "Bryce is a computer science student hoping to break into the software development industry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 text-slate-950 relative h-[5000px]`}>
        <div className="bg-rose-200 absolute top-[-6rem] -z-10 left-[11rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem]"></div>
        <div className="bg-cyan-200 absolute top-[-6rem] -z-10 left-[-50rem] h-[32rem] w-[32rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
