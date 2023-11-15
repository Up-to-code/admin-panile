"use client"
import { useCats } from "@/app/Store_data/Store_data";


function Big() {
  const bigcats = useCats((state) => state.cats.bigcats);

  return (
    <div className="max-w-sm m-auto   ">
      {bigcats}
    </div>
  );
}

export default Big;
