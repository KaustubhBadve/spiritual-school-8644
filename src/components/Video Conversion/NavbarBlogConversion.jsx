import React from "react";
import { BellIcon, DragHandleIcon, EditIcon } from "@chakra-ui/icons";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Box,
  Image,
  Button,
  Stack,
} from "@chakra-ui/react";

const NavbarBlogConversion = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="13px"
      position="sticky"
      width="100%"
      backgroundColor="white"
      top="0.1%"
      left="1%"
      zIndex={1}
    >
      <Stack direction="row" alignItems="center">
        <Image
          width="110px"
          src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
        />
        <Button
          width="60px"
          height="20px"
          fontSize="11px"
          _hover={{ color: "white", bg: "#5b4af6" }}
          border="1px solid #5b4af6"
          color="#5b4af6"
        >
          UPGRADE
        </Button>
        <Editable  defaultValue="Untitled video">
          <EditablePreview  />
          <EditableTextarea height="30px"/>
        </Editable>
        <EditIcon/>
      </Stack>
      <Stack direction="row" gap="10px" alignItems="center" borderLeft="1px solid #dddee6" pl="13px">
        <Button color="grey" fontWeight="500">Saved</Button>
        <Button _hover={{color:"white", backgroundColor:"#5846f6"}} fontSize="14px"  color="white" borderRadius="30px" border="1px solid #5b4af6" style={{color:"#5846f6"}} width="90px" ml="60px" pr="8px" pl="8px">PREVIEW</Button>
        <Button variant='solid' _hover={{color:"white", backgroundColor:"#5846f6"}} fontSize="14px"  color="white" borderRadius="30px" border="1px solid #5b4af6" bg='#5846f6' width="90px" ml="60px" pr="8px" pl="8px">PUBLISH</Button>
        <DragHandleIcon/>
        <BellIcon fontSize="25px" color="#5d6575" />
        <Box borderRadius="50%" width="30px" height="30px" bg="#dddee6">
          K
        </Box>
      </Stack>
    </Box>
  );
};

export default NavbarBlogConversion;
