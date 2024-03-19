import React from 'react';
import './App.css';
import { Box, Button, ChakraProvider } from '@chakra-ui/react';
import axios from 'axios'

function App() {
  const handleClick = async () => {
    const response = axios.get('http://localhost:3025')
    console.log("RESPONSE", response)
  }
  return (
    <ChakraProvider>
      <Box>Hi From APP</Box>
      <Button colorScheme='purple' onClick={handleClick}>Button</Button>
   </ChakraProvider>
  );
}

export default App;
