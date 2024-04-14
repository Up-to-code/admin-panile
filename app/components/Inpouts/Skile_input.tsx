"use client";

import { db } from "@/app/Firebase/db";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Skile_input() {
  const [Skile, setSkile] = useState("");
  const ref = useRef(null)
  const Hadelerinput = (valu: string) => {
    setSkile(valu);
  };
  const router = useRouter();
  const HadelOncleck = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Skiles"), {
      Skile: Skile,
    }).then(() => {
      router.refresh()
      setSkile("reload")
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
          <Image src={"/add-50.png"} height={30} width={"30"} alt="add" />
        </label>
        <input
          ref={ref}
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
