"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
function Sitebar() {
  const Pathname = usePathname();
  return (
    <div className="w-[256px] h-screen min-h-[700px]">
    <div className="w-[256px] bg-zinc-800 fixed  h-screen   min-h-[700px]">
      <div className="w-full flex flex-col gap-2 justify-center items-center ">
        <Logo />
        <Link
          href={"/"}
          className={
            (Pathname == "/" ? "bg-blue-500 " : "") +
            "text-white w-full px-3 py-1 "
          }
        >
          Home
        </Link>
        <Link
          href={"/Posh_Projckt"}
          className={
            (Pathname == "/Posh_Projckt" ? "bg-blue-500 " : "") +
            "text-white w-full px-3 py-1 "
          }
        >
          Posh_Projckt
        </Link>

        <Link
          href={"/Add_skile"}
          className={
            (Pathname == "/Add_skile" ? "bg-blue-500 " : "") +
            "text-white w-full px-3 py-1 "
          }
        >
          Add_skile
        </Link>
      </div>
    </div>
    </div>
  );
}

export default Sitebar;
