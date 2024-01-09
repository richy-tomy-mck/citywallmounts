import React from "react";
import { VStack, Text } from "@chakra-ui/react";

import AppointmentForm from "./AppointmentForm";

function Home() {
  return (
    <VStack spacing={8}>
      <Text fontSize="3xl">Just $150 with installation!</Text>
      <AppointmentForm />
    </VStack>
  );
}

export default Home;
