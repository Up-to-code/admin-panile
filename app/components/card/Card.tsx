import Image from "next/image";
import { Get_image } from "@/public/Get_image";
function Card() {
  return (
    <div className="max-w-[300px] m-auto ">
      <div className="w-[300px] h-40 bg-gray-300 rounded flex justify-center items-center overflow-hidden  ">
        <Image src={Get_image.add} alt="p" height={"150"}></Image>
      </div>
      <p className="mt-2 font-semibold text-lg ">
        This is test title of Projket
      </p>
    </div>
  );
}

export default Card;
