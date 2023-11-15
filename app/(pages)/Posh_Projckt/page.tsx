
import Normel from "@/app/components/Inpouts/Normel";
import File from "@/app/components/Inpouts/File";
import Container from "@/app/components/public_compnets/Container";
import Skiles_box from "@/app/components/Skile/Skiles_box";
import Input_h_t from "@/app/components/a/Input_h_t";
import Buoon_1 from "@/app/components/Buttons/Buoon_1";
import Linkes_input from "@/app/components/Inpouts/Linkes_input";

function page() {
  return (
    <Container>
      <Normel />
      <div className="flex justify-between gap-2">
        <Linkes_input type_link={"githup"}/>
        <Linkes_input type_link={"show"}/>
      </div>
      <File />
      <Input_h_t /> 
      <Skiles_box />
      <Buoon_1/>
    </Container>
  );
}

export default page;
