"use client";
// import Image from "next/image";
// import { useState } from "react";
// import { Get_image } from "@/public/Get_image";
import { Chenge_data } from "@/app/Store_data/Store";
import {  UploadDropzone } from "@bytescale/upload-widget-react";

function File() {
  // const [srcimage, setSrcImage] = useState("");
  // function HadelFile(e: any) {
  //   if (e.target.files?.[0]) {
  //     if (
  //       e.target.files?.[0].type == "image/jpeg" ||
  //       e.target.files?.[0].type == "image/png"
  //     ) {
  //       const fl = e.target.files?.[0];
  //       setSrcImage(URL.createObjectURL(e.target.files[0]));
   
  //       console.log(fl)
  //     } else {
  //       console.log("no");
  //     }
  //   }
  // }    

  const options = {
    apiKey: "public_kW15bmq9jWntSknYRt5i92b6dZUV", // This is your API key.
    maxFileCount: 1,
    showFinishButton: true, // Note: You must use 'onUpdate' if you set 'showFinishButton: false' (default).
    styles: {
      colors: {
        primary: "#377dff"
      }
    }
  };

   
  return (
    <div className="min-w-[200px] max-w-[600px] m-auto relative ">
      {/* <div className="w-full  h-max  p-2    bg-zinc-200  mt-9 rounded-lg     ">
        <input
          className="w-full h-full absolute bg-red-200 z-10 opacity-0  "
          type="file"
          onChange={(e) => {
            HadelFile(e);
          }}
        />
        <div className="max-h-[208px] w-full   flex justify-center items-center  top-0">
          <Image
            src={srcimage ? srcimage : Get_image.upload_icone}
            alt={"image"}
            width={srcimage ? "150" : "50"}
            height={srcimage ? "200" : "50"}
            className="rounded max-h-48"
          ></Image>
        </div>
      </div> */}
        <UploadDropzone 
        onUpdate={({ uploadedFiles }) =>Chenge_data("path_url", uploadedFiles.map(x => x.fileUrl).join("\n"))}
        onComplete={files => console.log(files.map(x => x.fileUrl).join("\n"))}
        width="600px"
        height="200px" options={options} />
    </div>
  );
}

export default File;
