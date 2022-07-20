import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <Box align="center" justify="center">
      <Container maxW={"50%"}  >
        <Box justifyContent={"center"} alignItems={"center"} margin={"auto"}>
          <Text
            textAlign={"center"}
            fontSize={"calc(1.25625rem + 0.075vw)"}
            fontWeight="400"
            lineHeight={"1.33"}
            letterSpacing="normal"
          >
            PRICING
          </Text>
        </Box>
        <Box justifyContent={"center"} alignItems={"center"} margin={"auto"}>
          <Text
            textAlign={"center"}
            pt={"20px"}
            fontSize={"calc(1.35625rem + 1.275vw)"}
            fontWeight="700"
            lineHeight={"1.33"}
            letterSpacing="normal"
            
          >
            Plans for your video content creation strategy
          </Text>
        </Box>
        <Box
          justifyContent={"center"}
          margin={"auto"}
          border={"1px solid #48505e"}
          w={"228px"}
          borderRadius={"20px"}
          m ={"50px 50px"}
          
        >
          <Flex align="center" justify="center"  >
            <ButtonGroup variant="outline" spacing={"-0.1"} cursor={"pointer"}>
              <Button borderRadius={"20px"} border={"none"} fontWeight={"400"}>
                Bill monthly
              </Button>
              <Button borderRadius={"20px"} fontWeight={"400"} border={"none"}>
                Bill yearly
              </Button>
            </ButtonGroup>
            {}
          </Flex>
        </Box>
      </Container>
      <Flex justifyContent={"center"} mt="30px" gap={"20px"} >
      <PricingCard/>
      <PricingCard/>
      <PricingCard/>
      <PricingCard/>

      </Flex>
    </Box>
  );
};

export default Pricing;
