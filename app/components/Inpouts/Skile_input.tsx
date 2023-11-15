"use client";

import { Get_image } from "@/public/Get_image";
import Image from "next/image";

export default function Skile_input() {
  const Hadelerinput = (valu: string) => {
    
  };

  return (
    <div >
      <div className="min-w-[200px] max-w-[600px] m-auto flex items-center text-lg mt-5">
        <label
          htmlFor="Title"
          className="text-white bg-blue-500  py-2 px-3 font-bold"
          onClick={() => {
      
          }}
        >
          <Image src={Get_image.add} width={"30"} alt="add" />
        </label>
        <input
      
          onChange={(e) => {
            Hadelerinput(e.target.value);
          }}
          type="text"
          className="py-2 px-3  bg-zinc-300 outline-none  w-full"
        />
      </div>
    </div>
  );
}
