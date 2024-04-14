"use client"

import { get_data } from "@/app/Store_data/Store"

import { db } from "@/app/Firebase/db";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

function Buoon_1() {
  const router = useRouter()
  const [Button_Lodeing, setButton_Lodeing] = useState("Saend")
  const onclick_send = async () => {
    let data = get_data()
    if (data.Imageurl) {
      setButton_Lodeing("Loading....")
    
      /*
        title: "",
        Imageurl: "",
        cont: "",
        Skiles: [],
        show:""
      */
      const docRef = await addDoc(collection(db, "Projekts"), data).then(() => {
        setButton_Lodeing("send")
    router.refresh()
      });
    }else{
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "image ins here",
      })
    }


  }

  return (
    <div>
      <button onClick={(e) => { onclick_send() }} className="px-8 py-2 my-5 mx-4 rounded font-bold text-white bg-blue-500">{Button_Lodeing}</button>
    </div>
  );
}

export default Buoon_1;
