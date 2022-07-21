import React from 'react'
import { Box,Heading,Stack,Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'


const SieBar = () => {
  return (
   <Stack  direction="column" pt="20px" color="grey" borderRight="1px solid #dddee6" height="100vh" gap="14px" justifyItems="left" width="80px" fontSize="17px">
           <stack>
            <HamburgerIcon/>
            <Text fontSize="15px">Story</Text>
           </stack>

           <stack>
            <Box><i className="fa-solid fa-photo-film"></i></Box>
            <Text fontSize="15px">Media</Text>
           </stack>

           <stack>
            <Box><i className="fa-solid fa-icons"></i></Box>
            <Text fontSize="15px">Icons</Text>
           </stack>

           <stack>
            <Box><i className="fa-solid fa-music"></i></Box>
            <Text fontSize="15px">Music</Text>
           </stack>

           <stack>
            <Box><i className="fa-brands fa-accusoft"></i></Box>
            <Text fontSize="15px">Style</Text>
           </stack>

           <stack>
            <Box><i className="fa-brands fa-square-font-awesome-stroke"></i></Box>
            <Text fontSize="15px">Format</Text>
           </stack>
   </Stack>
  )
}

export default SieBar