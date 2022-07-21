import React from "react";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, DeleteIcon } from "@chakra-ui/icons";
const PriorImage = () => {
  return (
    <Box pt="20px">
        <Stack direction="row" width="1300px" justifyContent="space-between">
      <Stack width="250px"  _hover={{ backgroundColor: "gray.300" }}   height="50px" color="gray.700" pl="20px" border="1px solid black" borderRadius="30px"  direction="row" alignItems="center">
        <Box>
          <i classNameName="fa-solid fa-microphone"></i>
        </Box>

        <Button
          _hover={{ backgroundColor: "gray.300" }}
          fontSize="14px"
          p="14px"
        >
          Record your own voiceover
        </Button>
      </Stack>

<Stack direction="row">
    <Box><i className="fa-regular fa-clock"></i></Box>
    <Text>00.07</Text>
   <ChevronDownIcon/>
</Stack>
      </Stack>


      <Stack>
        <Stack direction="column" width="50px" fontSize="20px">
          <Box><i className="fa-regular fa-message"></i></Box>
          <ChevronUpIcon/>
          <Box>1</Box>
          <ChevronDownIcon/>
          <Box><i className="fa-regular fa-copy"></i></Box>
          <DeleteIcon/>
          <Box><i className="fa-regular fa-circle-t"></i></Box>
        </Stack>
        <Box>
        <Image width="600px"  src="https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png"/>
      </Box>
      </Stack>
    </Box>
  );
};

export default PriorImage;
