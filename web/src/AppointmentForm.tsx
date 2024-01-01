// AppointmentForm.tsx

import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const AppointmentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [wallMountType, setWallMountType] = useState("");
  const [wallMaterial, setwallMaterial] = useState("");
  const [numberOfTvs, setnumberOfTvs] = useState(0);
  const [status, setStatus] = useState(false);

  async function handleScheduleAppointment() {
    const data = {
      id: uuid(),
      Name: name,
      Address: address,
      PhoneNumber: phoneNumber,
      Email: email,
      WallMountType: wallMountType,
      NumberOfTvs: numberOfTvs,
      WallMaterial: wallMaterial,
    };

    console.log(data);

    const gql = `
      mutation create($item: CreateOrderInput!) {
        createOrder(item: $item) {
          id
          Name
          Address
          PhoneNumber
          Email
          WallMountType
          NumberOfTvs
          WallMaterial
        }
      }`;

    const query = {
      query: gql,
      variables: {
        item: data,
      },
    };

    const endpoint = "/data-api/graphql";
    const result = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(query),
    });

    const response = await result.json();
    console.table(response.data.createOrder);
    setStatus(true)
  }

  return (
    <VStack w="300px">
      {status && <Alert status="success">
        <AlertIcon />
        <AlertTitle mr={2}>Success!</AlertTitle>
        <AlertDescription>
          Order confirmed!
        </AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>}
      <FormControl>
        <Box>
          <FormLabel>Number of TV's to be mounted</FormLabel>
          <NumberInput
            defaultValue={0}
            min={0}
            max={20}
            value={numberOfTvs}
            onChange={(ev) => setnumberOfTvs(Number(ev))}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {/* It is important that the Label comes after the Control due to css selectors */}
        </Box>
      </FormControl>

      <FormControl>
        <Box mt={6}>
          <FormLabel>Type of mount</FormLabel>
          <Select
            placeholder="Select type of mount"
            value={wallMountType}
            onChange={(ev) => setWallMountType(ev.target.value)}
          >
            <option value="fixed">Fixed Mount, flat against wall</option>
            <option value="tilt">Tilt mount, angled down</option>
            <option value="full-motion">Full motion mount</option>
          </Select>
          {/* It is important that the Label comes after the Control due to css selectors */}
        </Box>
      </FormControl>

      <FormControl>
        <Box mt={6}>
          <FormLabel>Wall material</FormLabel>
          <Select
            placeholder="Select wall material"
            value={wallMaterial}
            onChange={(ev) => setwallMaterial(ev.target.value)}
          >
            <option value="drywall">Drywall</option>
            <option value="brick-concrete">Brick or concrete</option>
            <option value="not-sure">Not sure</option>
          </Select>
          {/* It is important that the Label comes after the Control due to css selectors */}
        </Box>
      </FormControl>
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel>
          <Input
            value={name}
            type="text"
            placeholder="Your name"
            onChange={(ev) => setName(ev.target.value)}
          />
        </Box>
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Your email"
          onChange={(ev) => setEmail(ev.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          value={phoneNumber}
          type="tel"
          placeholder="Your phone number"
          onChange={(ev) => setPhoneNumber(ev.target.value)}
        />
      </FormControl>

      <FormControl>
        <Box mt={6}>
          <FormLabel>Address</FormLabel>
          <Textarea
            value={address}
            placeholder="Enter your address"
            onChange={(ev) => setAddress(ev.target.value)}
          />
        </Box>
      </FormControl>

      <Button
        type="submit"
        colorScheme="teal"
        mt={6}
        onClick={handleScheduleAppointment}
      >
        Schedule Appointment
      </Button>
    </VStack>
  );
};

export default AppointmentForm;
