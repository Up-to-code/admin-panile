import Container from "../public_compnets/Container";
import Skile from "./Skile";

function Skiles_box() {
  return (
    <div>
      <Container>
        <div className="h-full   rounded-md max-h-max  gap-5  p-4 flex    flex-wrap mb-12">
          <Skile Skile={"HTML"} >HTML</Skile>
          <Skile Skile={"CSS"}>CSS</Skile>
          <Skile Skile={"CSS3"}>CSS3</Skile>
          <Skile Skile={"JAVASCRIPT"}>JAVASCRIPT</Skile>
          <Skile Skile={"REACT"}>REACT</Skile>
          <Skile Skile={"NEXT.js"}>NEXT.js</Skile>
          <Skile Skile={"TAILWIND CSS"}>TAILWIND CSS</Skile>
          <Skile Skile={"bootstrap"}>bootstrap</Skile>
        </div>
      </Container>
    </div>
  );
}

export default Skiles_box;
