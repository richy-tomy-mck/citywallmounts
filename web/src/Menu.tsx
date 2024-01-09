import React from "react";
import {
  Link as ChakraLink,
  Box,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Link } from "react-router-dom";

const headerStyle = {
  height: "80px", // Set the desired fixed height for the header
  color: "white",
};

const Menu: React.FC = () => {
  return (
    <Flex p={4} bg="teal.500" style={headerStyle} alignItems="center">
      <Box>
        <Heading size="md">
          TV Wall mount installation across east bay area!
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <ColorModeSwitcher />
      </Box>
      <Box>
        <ChakraLink as={Link} to="/" mr={4}>
          Home
        </ChakraLink>
        <ChakraLink as={Link} to="/types">
          Wall Mount Types
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Menu;
