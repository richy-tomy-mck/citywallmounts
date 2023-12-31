import React from "react";
import { Text } from '@chakra-ui/react'

import WMConfigurator from "./WMConfigurator";
import AppointmentForm from "./AppointmentForm";

function Home() {
  return (
    <>
    <Text fontSize='4xl'> TV wall mounts for 150$, with installation!</Text>
        <WMConfigurator/>
        <AppointmentForm/>
        </>

  );
}

export default Home;
