import React, { useState } from 'react';
import './App.css';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react';
import axios from 'axios'

function App() {
  const [name, setName] = useState("test name 3");

  const onChange = (event: any) => {
    // console.log("EVENT: ", event.target.value)    
    setName(event.target.value)
  }

  const handleClick = async () => {
    const response = await axios.post('http://localhost:3005/name', {
      name,
    })
    console.log("RESPONSE", response.data)
  }
  return (
    <ChakraProvider>
      <Box m={10} display="flex" gap={4}>
        <Input onChange={onChange} placeholder="Type in a name..."/>
        <Button colorScheme='purple' onClick={handleClick}>
          Add Name
        </Button>
      </Box>
   </ChakraProvider>
  );
}

export default App;
