// AppointmentForm.tsx

import React, { useEffect } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
} from "@chakra-ui/react";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const AppointmentForm: React.FC = () => {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Add your appointment submission logic here
  //   console.log("Appointment form submitted");
  // };

  // const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
      const query = `
      {
        orders {
          items {
            id
            Name
          }
        }
      }`;
      
  const endpoint = "/data-api/graphql";
  const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query })
  });
  const result = await response.json();
  console.table(result.data.people.items);
    })();
  });

  return (
    <VStack w="400px">
      <FormControl>
        <Box>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" />
        </Box>
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Your email" />
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input type="tel" placeholder="Your phone number" />
      </FormControl>

      <FormControl>
        <Box mt={6}>
          <FormLabel>Address</FormLabel>
          <Textarea placeholder="Enter your address" />
        </Box>
      </FormControl>

      {/* <FormControl>
      <Box mt={6}>
        <FormLabel>Preferred appointment Date and Time</FormLabel>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date) => setSelectedDate(date as Date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
         </Box>
      </FormControl> */}

      <Button type="submit" colorScheme="teal">
        Schedule Appointment
      </Button>
    </VStack>
  );
};

export default AppointmentForm;
