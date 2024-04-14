/* eslint-disable @next/next/no-img-element */
"use client";

import { Chenge_data } from "@/app/Store_data/Store";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { storage } from "@/app/Firebase/db";
import { toast } from "@/components/ui/use-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import { Loader2, Terminal } from "lucide-react";
function File() {
  const [srcimage, setSrcImage] = useState("");
  const [uploadimage, setUploadimage] = useState(null)
  const [buttoneUoladstaet, setbuttoneUoladstaet] = useState("normel")
  const [imagename, setimagename] = useState("");
  const [imageurl, setimageurl] = useState("")
  function HadelFile(e: any) {
    if (e.target.files?.[0]) {
      if (
        e.target.files?.[0].type
      ) {
        const fl = e.target.files?.[0];
        setSrcImage(URL.createObjectURL(e.target.files[0]));
        setUploadimage(fl)
        setimagename(fl.name)
      } else {

      }
    }
  }

  const UploadFile = () => {
    console.log("1")
    if (srcimage && uploadimage) {
      const imgeref = ref(storage, `Projkets_img/${imagename + v4()}.jpg`)
      setbuttoneUoladstaet("loading")
      uploadBytes(imgeref, uploadimage).then((res) => {
        toast({
          description: " Image is uoloaded",
        })
        console.log(res)
        getDownloadURL(res.ref).then((url) => {
        setimageurl(url)
        Chenge_data("path_url", url)
        })
        setbuttoneUoladstaet("dan")
      })

    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Your not selicit image",
      })
    }
  }

  return <div>
    <div className="relative h-80 my-10 rounded-md border border-zinc-500">
      <input type="file" accept="image/*" name="" id="" onChange={HadelFile} className="opacity-0 w-full h-80 bg-blue-400 absolute z-10" />
      <div className="absolute top-0 flex justify-center items-center w-full h-full">
        <Image src={srcimage ? srcimage : "/uploa-100.png"} alt="" width={200} height={200} className={srcimage ? " h-72 w-auto border rounded-md my-5" : " h-10 w-auto"} />
        <Button disabled={buttoneUoladstaet == "loading" || buttoneUoladstaet == "dan" ? true : false} variant="outline" className="absolute bottom-5 right-5 z-20" onClick={UploadFile}>

          {buttoneUoladstaet == "loading" ? (<Loader2 className="mr-2 h-4 w-4 animate-spin" />) : ""}
          Upload</Button>
      </div>
    </div>
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Image URL!</AlertTitle>
      <AlertDescription>
        {imageurl}
      </AlertDescription>
    </Alert>
  </div>

}

export default File;
