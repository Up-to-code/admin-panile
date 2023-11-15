"use client";

import { useBearStore } from "@/app/Store_data/Store_data";

function Addnuber() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <div className="border border-zinc-900   m-auto max-w-md mt-4 flex flex-col justify-center items-center p-5 gap-6">
      <p>{bears}</p>
   
      <div className="flex gap-3">
        <button onClick={()=>{increasePopulation()}} className="outline-none bg-green-600 text-white py-1 px-4  rounded   ">
          add
        </button>
        <button onClick={()=>{removeAllBears()}} className="outline-none bg-green-600 text-white py-1 px-4 rounded    ">
          remove
        </button>
      </div>
    </div>
  );
}

export default Addnuber;
