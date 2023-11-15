"use client";

import { skilesContext } from "@/app/Context/SkileContext";
import { useContext, useState } from "react";

function Card() {
  const AswomeContext = useContext(skilesContext);
  console.log(AswomeContext?.Skiles);
  const [arr, setarr] = useState<undefined | string[]>([""]);
  function hadelButton(value: string) {
    setarr(AswomeContext?.Skiles);

    arr?.push(value);
    if (arr !== undefined) {
      AswomeContext?.setskiles(arr);
    }
  }
  return (
    <div className="max-w-md border border-solid border-zinc-900 py-3 px-5 m-auto mt-5 ">
      <p>{AswomeContext?.Skiles}</p>
      <button
        onClick={() => {
          hadelButton("Appp");
        }}
      >
        click
      </button>
    </div>
  );
}

export default Card;
