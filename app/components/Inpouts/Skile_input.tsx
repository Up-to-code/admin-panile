"use client";

import { db } from "@/app/Firebase/db";
import { Get_image } from "@/public/Get_image";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";

export default function Skile_input() {
  const [Skile, setSkile] = useState("");
  const Hadelerinput = (valu: string) => {
    setSkile(valu);
  };
  const HadelOncleck = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Skiles"), {
      Skile: Skile,
    });
  };

  return (
    <div>
      <div className="min-w-[200px] max-w-[600px] m-auto flex items-center text-lg mt-5">
        <label
          htmlFor="Title"
          className="text-white bg-blue-500  py-2 px-3 font-bold cursor-pointer"
          onClick={() => {
            HadelOncleck();
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
