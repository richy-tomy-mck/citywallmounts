import React from "react";
import { ChakraProvider, theme, Box, Grid } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import WMTypes from "./WMTypes";

const App: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <Menu />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/types" element={<WMTypes />} />
            </Routes>
          </Grid>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;
