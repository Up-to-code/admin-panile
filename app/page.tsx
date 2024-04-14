/* eslint-disable @next/next/no-async-client-component */
"use client"
import Image from "next/image";

import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/db";
import Link from "next/link";
import Dletebutton from "./components/DeletButton";
import Container from "./components/public_compnets/Container";
import { useState } from "react";


export default  function Home() {
const [D,setD] =useState<any[] | Document[]>()
const first = async () => { 
  let data: any[] = [];
    const querySnapshot = await getDocs(collection(db, "Projekts"));
  data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push({
      id: doc.id,
      data: doc.data(),
    });
  })
  setD(data)
  
  
  ;
 }
  return (
    <>
      <Container>
        <div className="flex flex-wrap  m-auto gap-2 ">
          {D&& D.map((doc) => {
            return (
              <div
                key={doc.id}
                className="card card-compact w-96 bg-white   shadow py-3"
              >
                <div className="w-full  ">

                  <div className="flex justify-center items-center h40">
                    <Image
                      src={doc.data.Imageurl}
                      alt={""}
                      width={300}
                      height={150}
                      className="rounded-md  h-full"
                    />
                  </div>

                </div>
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold my-2 px-4">{doc.data.title}</h2>
                  <div className="card-actions items-center py-2 px-3 flex ">
                    <Link href={`/edit/${doc.id}`} className="bg-zinc-900 text-white py-2 px-5 rounded-md   ">
                      edit
                    </Link>
                    <Dletebutton id={doc.id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

    </>
  );
}
