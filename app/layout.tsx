import { Toaster } from "@/components/ui/toaster";
import Footer from "./components/Footer/Footertsx";
import Gethup from "./components/Gethup/Gethup";
import Nav from "./components/Navbar/Nav";
import Sitebar from "./components/Navgashin/Sitebar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Gcontrol Painle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-slate-50 ">
        <Nav />
        <div className="flex  ">
          <Sitebar />
          <main className="w-screen   ">{children}</main>
          <Toaster />

        </div>

      </body>
    </html>
  );
}
