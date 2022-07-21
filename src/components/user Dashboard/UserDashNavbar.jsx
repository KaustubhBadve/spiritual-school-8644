import React from "react";
import { Box, Image, Button, Stack } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const NavbarTempSelc = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderBottom="1px solid #dddee6"
      p="22px"
    >
      <Stack
        direction="row"
        alignItems="center"
        width="50%"
        // border="1px solid red"
      >
        <Image
          width="150px"
          src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
        />
      </Stack>
      <Stack
        direction="row"
        borderLeft="1px solid #dddee6"
        pl="13px"
        width="25% "
        // border="1px solid red"
      >
        <Box>
          <input
            border="none"
            bg="#5b4af6"
            type="text"
            placeholder="search your videos"
          />
        </Box>
        <Button
          width="80px"
          height="40px"
          fontSize="12px"
          _hover={{ color: "white", bg: "#5b4af6" }}
          border="1px solid #5b4af6"
          color="#5b4af6"
          // marginTop="5px"
          borderRadius="20px"
        >
          UPGRADE
        </Button>
        <BellIcon fontSize="25px" color="#5d6575" />
        <Box borderRadius="50%" width="30px" height="30px" bg="#dddee6">
          K
        </Box>
      </Stack>
    </Box>
  );
};


export default NavbarTempSelc;
