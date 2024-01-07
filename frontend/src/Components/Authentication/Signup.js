import { FormControl, FormLabel, VStack, Input, 
InputGroup,InputRightElement, Button,  } from '@chakra-ui/react'
import { useState } from 'react';
import React from 'react'

const Signup = () => {
  const [name, setname] = useState();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [phNumber, setphNumber] = useState()
  const [email, setemail] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [password, setpassword] = useState();
  const [pic, setpic] = useState();
  const [picLoading, setpicLoading] = useState();

  const postDetails=(pics)=>{
    
  };
  const submitHandler=()=>{

  };
  return <VStack spacing="5px">
  <FormControl id="first-name" isRequired>
    <FormLabel>Name</FormLabel>
    <Input
      placeholder="Enter Your Name"
      onChange={(e) => setname(e.target.value)}
    />
  </FormControl>
  <FormControl id="email" isRequired>
    <FormLabel>Email Address</FormLabel>
    <Input
      type="email"
      placeholder="Enter Your Email Address"
      onChange={(e) => setemail(e.target.value)}
    />
  </FormControl>
  <FormControl id="phNumber" isRequired>
    <FormLabel>Phone Number</FormLabel>
    <Input
      type="tel"
      placeholder="Enter Your Phone Number"
      onChange={(e) => setphNumber(e.target.value)}
    />
  </FormControl>
  <FormControl id="password" isRequired>
    <FormLabel>Password</FormLabel>
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  </FormControl>
  <FormControl id="password" isRequired>
    <FormLabel>Confirm Password</FormLabel>
    <InputGroup size="md">
      <Input
        type={show ? "text" : "password"}
        placeholder="Confirm password"
        onChange={(e) => setconfirmpassword(e.target.value)}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  </FormControl>
  <FormControl id="pic">
    <FormLabel>Upload your Picture</FormLabel>
    <Input
      type="file"
      p={1.5}
      accept="image/*"
      onChange={(e) => postDetails(e.target.files[0])}
    />
  </FormControl>
  <Button
    colorScheme="blue"
    width="100%"
    style={{ marginTop: 15 }}
    onClick={submitHandler}
    isLoading={picLoading}
  >
    Sign Up
  </Button>
</VStack>

};

export default Signup;