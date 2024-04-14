"use client"
import { Chenge_data } from "@/app/Store_data/Store";
import { useState } from "react";
function Normel() {
  const [title, setTitle] = useState("")
  return (
    <div className="min-w-[200px] max-w-full  my-10 border border-zinc-900 flex items-center text-lg">
      <label
        htmlFor="Title"
        className="text-white bg-blue-500  py-2 px-3 font-bold"
      >
        Title
      </label>
      <input
        type="text"
        className="py-2 px-3  bg-zinc-300 outline-none  w-full"
        onChange={(e) => { Chenge_data("title", e.target.value) }}
      />
    </div>
  );
}

export default Normel;
