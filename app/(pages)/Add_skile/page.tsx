/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Skile_input from "@/app/components/Inpouts/Skile_input";
import Skiles_box from "@/app/components/Skile/Skiles_box";
import Container from "@/app/components/public_compnets/Container";
import { useState } from "react";

function page() {
  return (
    <Container>
      <Skile_input />
      <div className="max-w-2xl m-auto">
      <Skiles_box />
      </div>
    </Container>
  );
}

export default page;
