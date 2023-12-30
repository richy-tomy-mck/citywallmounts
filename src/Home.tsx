import React from "react";
import {
  VStack,
} from "@chakra-ui/react";

import WMConfigurator from "./WMConfigurator";
import AppointmentForm from "./AppointmentForm";

function Home() {
  return (
    <>

        <WMConfigurator/>
        <AppointmentForm/>
        </>

  );
}

export default Home;
