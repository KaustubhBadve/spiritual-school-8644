import { Box, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const FrequentQues = () => {
  return (
    <Container
      maxW={"100%"}
      h={"400px"}
      paddingTop={"60px"}
      paddingBottom={"60px"}
    >
      <Box>
        <Flex h={"auto"} w={"1200px"} alignContent={"space-around"}>
          <Box h={"auto"} padding={"10px"} w={"50%"}>
            <Text textAlign={"left"} fontSize={"23px"}>
              What if I only need Lumen5 for a set amount of time?
            </Text>
            <Text textAlign={"left"} mt={"25px"} fontSize={"18px"}>
              That's fine! You can cancel your account anytime.
            </Text>
          </Box>
          <Spacer />
          <Box h={"auto"} padding={"10px"} w={"50%"}>
            <Text textAlign={"left"} fontSize={"23px"}>
              What happens to my videos if I cancel?
            </Text>
            <Text textAlign={"left"} mt={"25px"} fontSize={"18px"}>
              All the videos you create are yours to keep forever and ever.
            </Text>
          </Box>
        </Flex>
        {/* 2nd flex */}
        <Flex h={"auto"} w={"1200px"} mt={"50px"}>
          <Box h={"auto"} padding={"10px"} w={"50%"}>
            <Text textAlign={"left"} fontSize={"23px"}>
              Do you have a non-profit discount?
            </Text>
            <Text textAlign={"left"} mt={"25px"} fontSize={"18px"}>
              We do. Contact us for more information.
            </Text>
          </Box>
          <Spacer />
          <Box h={"auto"} padding={"10px"} w={"50%"}>
            <Text textAlign={"left"} fontSize={"23px"}>
              How do I pay for my plan?
            </Text>
            <Text textAlign={"left"} mt={"25px"} fontSize={"18px"}>
              You can pay with Visa, Mastercard, and American Express. All
              prices are in USD. Invoiced billing is available on the Enterprise
              plan.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default FrequentQues;
