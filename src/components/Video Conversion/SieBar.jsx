import React from 'react'
import { Box,Heading,Stack,Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const SieBar = () => {
  return (
   <Stack  direction="column">
           <stack>
            <HamburgerIcon/>
            <Text>Story</Text>
           </stack>

           <stack>
            <Box><i class="fa-solid fa-photo-film"></i></Box>
            <Text>Story</Text>
           </stack>
   </Stack>
  )
}

export default SieBar