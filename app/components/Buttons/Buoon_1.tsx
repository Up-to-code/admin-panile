"use client"

import { get_data } from "@/app/Store_data/Store"

import { db } from "@/app/Firebase/db";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

function Buoon_1() {
  const [Button_Lodeing, setButton_Lodeing] = useState("Saend")
  const onclick_send = async () => {
    setButton_Lodeing("Loading....")
    let data = get_data()

    console.log(data)
    /*
      title: "",
      Imageurl: "",
      cont: "",
      Skiles: [],
      show:""
    */

    const docRef = await addDoc(collection(db, "Projekts"), data).then(() => {
      setButton_Lodeing("send")

    });


  }

  return (
    <div>
      <button onClick={(e) => { onclick_send() }} className="px-8 py-2 my-5 mx-4 rounded font-bold text-white bg-blue-500">{Button_Lodeing}</button>
    </div>
  );
}

export default Buoon_1;
