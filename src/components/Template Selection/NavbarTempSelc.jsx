import React from 'react'
import {Box,Image,Button,Stack} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'


const NavbarTempSelc = () => {
  return (
    <Box  display="flex" justifyContent="space-between" borderBottom="1px solid #dddee6" p="13px">
      <Stack direction="row"  alignItems="center">
        <Image width="110px" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"/>
         <Button width="60px" height="20px" fontSize="11px" _hover={{color:"white", bg:"#5b4af6"}} border="1px solid #5b4af6" color="#5b4af6">UPGRADE</Button>
         </Stack>
         <Stack direction="row" borderLeft="1px solid #dddee6" pl="13px">
          <BellIcon fontSize="25px" color="#5d6575"/>
          <Box borderRadius="50%" textAlign="center" width="30px" height="30px" bg="#dddee6">K</Box>
         </Stack>
    </Box>
  )
}

export default NavbarTempSelc