import { Stack,Box,useColorModeValue,Text} from '@chakra-ui/react'
import React from 'react'

const Analytics = () => {
  return (
    <div>
      <Text fontSize="40px">Analytics Overview</Text>
      <Stack direction="row" gap="20px" marginTop="50px">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          // border={"1px solid grey"}
          // rounded={"md"}
          overflow={"hidden"}
          width={"300px"}
          height={"150px"}
          boxShadow={
            " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
          }
          color={"rgb(255, 255, 255)"}
        >
          <Text
            fontSize="40px"
            fontWeight="30"
            color="white"
            justifyContent="center"
          >
            +
          </Text>
        </Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          // border={"1px solid grey"}
          // rounded={"md"}
          overflow={"hidden"}
          width={"300px"}
          height={"150px"}
          boxShadow={
            " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
          }
          color={"rgb(255, 255, 255)"}
        ></Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          // border={"1px solid grey"}
          // rounded={"md"}
          overflow={"hidden"}
          width={"300px"}
          height={"150px"}
          boxShadow={
            " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
          }
          color={"rgb(255, 255, 255)"}
        ></Box>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          // border={"1px solid grey"}
          // rounded={"md"}
          overflow={"hidden"}
          width={"300px"}
          height={"150px"}
          boxShadow={
            " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;"
          }
          color={"rgb(255, 255, 255)"}
        ></Box>
      </Stack>
    </div>
  );
}

export default Analytics