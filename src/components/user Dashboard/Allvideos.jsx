import React from 'react'
import { Box, Center, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import AllvideosCard from './AllvideosCard';

const Allvideos = () => {
  return (
    <div>
      <Box
        height="100vh"
        // overflow="scroll"
        cursor="pointer"
        width="100%"
        pl="100px"
        textAlign="left"
        pt="45px"
        pr="60px"
      >
        <Heading mb="10px">All Videos</Heading>
        <hr style={{ backgroundColor: "#dddde6" }} />
        <Stack gap="20px"  direction="row">
          <Box
            bg={useColorModeValue("white", "gray.800")}
            border={"1px solid grey"}
            rounded={"md"}
            overflow={"hidden"}
            width={"350px"}
            height={"350px"}
            backgroundColor={"rgb(88,70,246)"}
          >
            <Text
              fontSize="40px"
              fontWeight="30"
              color="white"
              justifyContent="center"
            >
              +
            </Text>
            <Text
              fontSize="40px"
              fontWeight="30"
              color="white"
              justifyContent="center"
            >
              New Videos
            </Text>
          </Box>
          <AllvideosCard />
          {/* <AllvideosCard /> */}
        </Stack>
      </Box>
    </div>
  );
}

export default Allvideos