import React from "react";
import { Text } from '@chakra-ui/react'

import AppointmentForm from "./AppointmentForm";

function Home() {
  return (
    <>
    <Text fontSize='4xl'> TV wall mounts in Antioch, Brentwood & Oakley</Text>
    <Text fontSize='3xl'>Just $150 with installation!</Text>
        <AppointmentForm/>
        </>

  );
}

export default Home;
