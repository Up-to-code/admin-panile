"use client"
import { Chenge_data } from "@/app/Store_data/Store"


interface typesP {
  type_link :string
}
function Linkes_input(props:typesP) {
  const Text_in = (e:string) => {
     Chenge_data(props.type_link,e)
   }
 
  return (
    <div className="w-1/2">
      <p>
        {props.type_link}
      </p>
    <input  type="text" className="py-2 px-4 bg-zinc-200 rounded outline-none w-full " onChange={(e)=>{Text_in(e.target.value)}}/>
    </div>
  )
}

export default Linkes_input