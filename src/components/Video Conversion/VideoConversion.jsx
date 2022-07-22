import React from 'react'
import NavbarBlogConversion from './NavbarBlogConversion'
import SieBar from './SieBar'
import { Box,Heading,Stack,Text } from '@chakra-ui/react'
import ImportUrl from './ImportUrl'
import PriorImage from './PriorImage'

const VideoConversion = () => {
  return (
    <Box>
    <NavbarBlogConversion/>
    <Stack direction="row"> 
    <SieBar/>
    <ImportUrl/>
    <PriorImage/>
    </Stack>

    </Box>
  )
}

export default VideoConversion