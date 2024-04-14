
/* eslint-disable react-hooks/rules-of-hooks */
import { db } from "@/app/Firebase/db";
import Container from "../public_compnets/Container";
import Skile from "./Skile";
import { DocumentData, collection, getDocs } from "firebase/firestore";
let data: { id: string; data: DocumentData }[] = [];
async function Skiles_box() {
  const querySnapshot = await getDocs(collection(db, "Skiles"));


  data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  return (
    <div>
      <Container>
        <div className="h-full   rounded-md max-h-max  gap-5  p-4 flex    flex-wrap mb-12">
          {data.map((e) => {
            return (
              <div key={e.id}>
                <Skile Skile={e.data.Skile}>{e.data.Skile}</Skile>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export default Skiles_box;
