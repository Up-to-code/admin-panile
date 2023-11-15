"use client";

import { Chenge_data } from "@/app/Store_data/Store";



function Input_h_t() {
 
  const HadelInpout = (e: string) => {
    const newLocal = "\n";
    Chenge_data("constacet", e)

  };
  return (
    <div>
      <div>
        {/* {
          text.map((e)=>{
            return <p key={Math.random()}> {e}</p>
          })
        } */}
      </div>
      <div className="my-7 text-lg font-semibold">
         <label>
        Contaent
      </label>
      <textarea
        className="w-full text-lg  h-60  bg-zinc-200   outline-none rounded  p-2  "
        name=""
        onChange={(e) => {
          HadelInpout(e.target.value);
        }}
      ></textarea>     
      </div>

    </div>
  );
}

export default Input_h_t;
