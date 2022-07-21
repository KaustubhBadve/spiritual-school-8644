import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
   import LoginSignup from "./LoginSignup.png"
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Stack direction="row">
        <Box>
          <img src={LoginSignup} alt="" />
        </Box>

        <Flex >
      <Stack margin="100px"
      width="700px"
      height="700px"
        spacing={8}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={12}
        >
        <Heading lineHeight={0.5} fontSize={{ base: '2xl', md: '3xl' }}>
        Get started with a free account
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input height="80px"
          borderRadius="40px"
            placeholder="Work Email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input height="80px"
          borderRadius="40px"
          placeholder="Password"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input height="80px"
          borderRadius="40px"
            placeholder="Work Email"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={2}>
          <Button
            bg={'rgb(86,68,241)'}
            color={'white'}
            borderRadius="40px"
            height="50px"
            _hover={{
              bg: 'blue.500',
            }}>
            Login
          </Button>
           <hr/>
           <Button
            bg={'rgb(86,68,241)'}
            color={'blue'}
            borderRadius="40px"
            height="50px"
             background="white"
            border="1px solid blue"
            _hover={{
              bg: 'blue.500',
            }}>
            Login with Facebook
          </Button>
          <Button
            bg={'rgb(86,68,241)'}
            color={'blue'}
            borderRadius="40px"
            height="50px"
            background="white"
            border="1px solid blue"
            _hover={{
              bg: 'blue.500',
            }}>
            Login with SSO
          </Button>
          <Text>Need an Lumen account?<><a color='blue' href="">create one</a></></Text>
        </Stack>
      </Stack>
    </Flex>
      </Stack>
      
    );
  }