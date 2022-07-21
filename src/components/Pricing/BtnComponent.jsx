import { Button } from '@chakra-ui/react'
import React from 'react'

const BtnComponent = ({label,btnsize}) => {
    
  return (
    <Button _hover={{ backgroundColor: "#5846f6", color: "white" }}
    // w={"100%"}
    h={"50px"}
    fontWeight={"400"}
    border={"1px solid blue"}
    borderRadius={"30px"}
    bgColor={"white"}
    color={"#5846f6"}
    size={"lg"}
    > {label} </Button>
  )
}

export default BtnComponent