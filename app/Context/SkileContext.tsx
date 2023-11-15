"use client"
/// stip 1
import {  Dispatch, SetStateAction, createContext, useState } from "react";

// stip 2
interface typeSkiles {
  Skiles: Array<string>;
  setskiles: Dispatch<SetStateAction<string[]>>;
}

//stip 3
export  const skilesContext = createContext<null | typeSkiles>(null);

function SkileContext({ children }: { children: React.ReactNode }) {
  const [Skiles, setskiles] = useState([""]);
  return (
    <skilesContext.Provider value={{ Skiles, setskiles }}>
      {children}
    </skilesContext.Provider>
  );
}

export default SkileContext;
