"use client"

import { useCats } from "@/app/Store_data/Store_data";

function Cats() {
//   const bigcats = useCats((state) => state.cats.bigcats);
//   const somelCats = useCats((state) => state.cats.somelCats);
//   const increasebigcats = useCats((state) => state.increasebigcats);
//   const increasesmoellcats = useCats((state) => state.increasesmoellcats);
   const {cats:{bigcats,somelCats},increasebigcats,increasesmoellcats } =useCats()
  
   return (
    <div className="max-w-md  p-5 flex gap-4 flex-col  m-auto mt-4 ">
      <p>Big ctas : {bigcats}</p>
      <p>Big ctas : {somelCats}</p>

      <div className="flex gap-4">
        <button
          onClick={() => {
            increasebigcats();
          }}
          className="py-1 px-4 bg-green-600 rounded text-white"
        >
          add BigCtas
        </button>
        <button
          onClick={() => {
            increasesmoellcats();
          }}
          className="py-1 px-4 bg-green-600 rounded text-white"
        >
          add smCats
        </button>
      </div>
    </div>
  );
}

export default Cats;
