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
          <div className="w-screen ">{children}</div>
        </div>

      </body>
    </html>
  );
}
