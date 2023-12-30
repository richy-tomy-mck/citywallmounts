import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  VStack,
  Box,
  Select,
} from "@chakra-ui/react";

function WMConfigurator() {
  return (
    <VStack>
      <FormControl>
        <Box>
        <FormLabel>Number of TV's to be mounted</FormLabel>
          <NumberInput defaultValue={0} min={0} max={20}>
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
          <Select placeholder="Select type of mount">
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
          <Select placeholder="Select wall material">
            <option value="drywall">Drywall</option>
            <option value="brick-concrete">Brick or concrete</option>
            <option value="not-sure">Not sure</option>
          </Select>
          {/* It is important that the Label comes after the Control due to css selectors */}
          
        </Box>
        </FormControl>
    </VStack>
  );
}

export default WMConfigurator;
