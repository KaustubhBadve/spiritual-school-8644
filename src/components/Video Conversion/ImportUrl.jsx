import React from 'react'
import { Box,Button,Heading,Input,Stack,Text, Textarea } from '@chakra-ui/react'


const ImportUrl = () => {
  return (
    <Box width="450px" border="1px solid #dddee6" borderLeft="none">
     <Box borderBottom="1px solid #dddee6" height="75px" >
        <Stack pt="20px" direction="row" alignItems="center">
            <span style={{paddingBottom:"20px",fontSize:"18px"}}><i className="fa-solid fa-file-lines"></i></span>
            <Input width="75%" placeholder="Paste a URL to your blog/article" borderTop="none" borderLeft="none" borderRight="none" borderRadius="0px" borderBottom="2px solid blue" pb="20px"/>
            <Button _hover={{color:"black", backgroundColor:"#5846f6"}} backgroundColor="#5846f6" fontSize="14px"  color="white" borderRadius="30px" border="1px solid #5b4af6"  width="80px" pr="8px" pl="8px">IMPORT</Button> 
        </Stack>

        <Box height="650px">
          <Textarea placeholder={`Welcome to Lumen5! \n PREPARE YOUR SCRIPT \n Paste the URL from your article or blog in the field \n above or copy/paste text directly in this text box \n \n BUILD YOUR VIDEO WITH SCENES \n Click the green (+) button or drag text and media \n into the editor to create new scenes. \n \n POPULATE YOUR SCENES WITH MEDIA \n Drag images and videos from the media tab on to \n your scenes. Upload your own or select from our \n stock media library. \n \n Can't find right image? No worries - we offer \n many scene designs that convey your messege \n wit words and graphics only. `} aria-multiline={true}/>
        </Box>

        <Stack direction="row"> 
          <Box  border="1px solid #dddee6" fontSize="14px" pt="6px" color="gray" width="70%" height="40px" >
          Use A.I to generate a summary <span style={{marginLeft:"20px"}}><i class="fa-solid fa-angle-up"></i></span>
          </Box>
          <Button _hover={{color:"black", backgroundColor:"#5846f6"}} backgroundColor="#5846f6" fontSize="14px"  color="white" borderRadius="30px" border="1px solid #5b4af6"  width="120px" pr="10px" pl="8px">Convert to video</Button>
        </Stack>
     </Box>
    </Box>
  )
}

export default ImportUrl