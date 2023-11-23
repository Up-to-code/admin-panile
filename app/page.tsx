import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/db";
import Link from "next/link";
import Dletebutton from "./components/DeletButton";
import Container from "./components/public_compnets/Container";
let data: any[] = [];
/**
 * 
 * GNmaS3lAH278Y366I0Y  =>  {
  Skiles: [ 'HTML', 'TAILWIND CSS', 'JAVASCRIPT', 'REACT' ],
  cont: 'firebase.google.com/docs/firestore/manage-data/add-data?hl=ar\n' +
    'props.type_link}',
  Imageurl: 'https://upcdn.io/kW15bmq/raw/uploads/2023/11/15/4m2VYmmQ8w-765604814 (1).jpeg',
  title: 'title',
  show: 'https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ar',
  githup: 'http://localhost:3000/Posh_Projckt'
 */
export default async function Home() {
  const querySnapshot = await getDocs(collection(db, "Projekts"));
  data = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    data.push({
      id: doc.id,
      data: doc.data(),
    });
  });
  console.log(data);
  return (
    <>
    <Container>
  <div className="flex flex-wrap  m-auto gap-2 ">
        {data.map((doc) => {
          return (
            <div
              key={doc.id}
              className="card card-compact w-96 bg-white   shadow py-3"
            >
         <div className="w-full h-max  ">

         <div className="flex justify-center items-center ">
            <Image
                  src={doc.data.Imageurl}
                  alt={""}
                  width={300}
                  height={150}
                  className="rounded-md  "
                />
         </div>
    
             </div>
              <div className="card-body">
                <h2 className="card-title">{doc.data.title}</h2>
                <div className="card-actions justify-between ">
                  <Link href={`/edit/${doc.id}`} className="bg-zinc-900 text-white py-2 px-5 rounded-md   ">
                    edit
                  </Link>
                  <Dletebutton id={doc.id}/>
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
