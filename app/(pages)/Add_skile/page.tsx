"use client";

import Skile_input from "@/app/components/Inpouts/Skile_input";
import Skiles_box from "@/app/components/Skile/Skiles_box";
import Container from "@/app/components/public_compnets/Container";

function page() {
 
  return (
    <Container>
      <Skile_input />
      <Skiles_box />
    </Container>
  );
}

export default page;
