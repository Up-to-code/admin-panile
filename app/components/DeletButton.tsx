
"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/db";
import { useRouter } from "next/navigation";

function Dletebutton({ id }: { id: string }) {

  const reouter = useRouter()

  const Delete = async () => {
    await deleteDoc(doc(db, "Projekts", id)).then(() => {
      reouter.refresh()
    });
  }

  return (
    <>
      <button
        className="py-2 px-5 mx-5 bg-red-600 rounded outline-none font-bold  text-white"
        onClick={Delete}
      >
        Delet
      </button>


    </>

  );
}

export default Dletebutton;


