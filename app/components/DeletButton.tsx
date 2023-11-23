/* eslint-disable @next/next/no-async-client-component */
"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/db";
import { attachReactRefresh } from "next/dist/build/webpack-config";
import { redirect } from "next/navigation";

async function Dletebutton({ id }: { id: string }) {
  return (
    <button
      className="py-2 px-5 bg-red-600 rounded outline-none font-bold  text-white"
      onClick={async () => {
        await deleteDoc(doc(db, "Projekts", id));
       redirect("/")
      }}
    >
      Delet
    </button>
  );
}

export default Dletebutton;
