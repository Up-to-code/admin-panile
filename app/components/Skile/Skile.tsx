"use client";
import { Skiles_array } from "@/app/Store_data/Store";
import { MutableRefObject, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  Skile:string
};
function Skile({ children ,Skile}: Props) {

  const InputChick = useRef() as MutableRefObject<HTMLInputElement>;
  const [isChkied, setischiked] = useState(false);
  const Hadelinpot = () => {
    if (InputChick.current.checked == true) {
      setischiked(false);
      InputChick.current.checked = false;
    } else {
      setischiked(true);
      InputChick.current.checked = true;
    }
    Skiles_array(Skile)
  };
  return (
    <div className="cursor-pointer">
      <div
        onClick={Hadelinpot}
        className={
          "text-white  py-1 px-4 max-w-max uppercase " +
          (isChkied ? "bg-blue-600" : "bg-zinc-400")
        }
      >
        {children}
      </div>

      <input
        type="checkbox"
        name=""
        id=""
        ref={InputChick}
        className=" hidden   "
      />
    </div>
  );
}

export default Skile;
