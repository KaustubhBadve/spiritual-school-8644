import React from 'react'
import { Box, Center, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import AllvideosCard from './AllvideosCard';

const Allvideos = () => {
  return (
    
    <div>
                    <Heading textAlign="left" margin="20px" >All Videos</Heading>

      <Stack
       direction="row" gap="5px" marginTop="50px"
        // height="100vh"
        // // overflow="scroll"
        // cursor="pointer"
        // width="100%"
        // pl="100px"
        // textAlign="left"
        // pt="45px"
        // pr="60px"
      >

        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px"  direction="row">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            border={"1px solid #dddee6"}
            rounded={"md"}
            overflow={"hidden"}
            width={"400px"}
            height={"400px"}
            backgroundColor={"rgb(88,70,246)"}
          >
            <Text
              fontSize="80px"
              fontWeight="30"
              color="white"
              justifyContent="center"
              marginTop="50px"
            >
              +
            </Text>
            <Text
              fontSize="40px"
              fontWeight="30"
              color="white"
             textAlign="center"
               marginTop="50px"
            >
              New Videos
            </Text>
          </Box>
          <AllvideosCard />
        </Stack>
      </Stack>
    </div>
  );
}

export default Allvideos