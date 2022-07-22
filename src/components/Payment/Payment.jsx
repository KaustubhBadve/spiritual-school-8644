import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const Payment = () => {
  return (
    <Container maxW={"60%"} h={"auto"}>
      <HStack
        h={"100%"}
        align={"center"}
        margin={"50px"}
        justifyContent={"center"}
      >
        {/* box 1 */}
        <Box
          ml={"20px"}
          mt={"10px"}
          paddingLeft={"30px"}
          w={"50%"}
          paddingRight={"120px"}
          h={"700px"}
        >
          <Box h={"80px"}>
            <Flex>
              <Image
                src={
                  "https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
                }
                h={"100px"}
                w={"100px"}
              />
            </Flex>
          </Box>
          <Box h={"420px"} mt={"20px"}>
            <Box>
              <Text fontSize={"14px"} fontWeight={"500"} color={"gray"}>
                Subscribe to Starter - v2 (Annual)
              </Text>
              <Flex w={"300px"}>
                <Box w={"auto"}>
                  <Text fontSize={"35px"} fontWeight={"500"}>
                    $708.00
                  </Text>
                </Box>
                <Box w={"20%"} paddingLeft={"10px"}>
                  <Text
                    mt={"5px"}
                    fontSize={"14px"}
                    color={"gray"}
                    fontWeight={"600"}
                  >
                    per year
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Flex mt={"40px"} justifyContent={"space-between"}>
                <Text fontSize={"14px"} fontWeight={"500"} color={"#515151"}>
                  Starter - v2 (Annual)
                </Text>
                <Text fontSize={"14px"} fontWeight={"500"} color={"#515151"}>
                  $708.00
                </Text>
              </Flex>
              <Text mt={"-1px"} fontSize={"13px"} color={"#b3b3b3"}>
                Billed Yearly
              </Text>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"} m={"30px 0px 10px "}>
                <Text fontSize={"14px"} fontWeight={"500"} color={"#515151"}>
                  Subtotal
                </Text>
                <Text fontSize={"14px"} fontWeight={"500"} color={"#515151"}>
                  $708.00
                </Text>
              </Flex>
              <hr
                style={{
                  background: "gray",
                  color: "gray",
                  borderColor: "gray",
                  height: "1px",
                }}
              ></hr>
            </Box>
            <Box>
              <Flex justifyContent={"space-between"} m={"10px 0 20px"}>
                <Text color={"#b3b3b3"} fontSize={"14px"} fontWeight={"460"}>
                  Tax{" "}
                </Text>
                <Text color={"#b3b3b3"} fontSize={"14px"} fontWeight={"460"}>
                  $0.00
                </Text>
              </Flex>
              <hr
                style={{
                  background: "gray",
                  color: "gray",
                  borderColor: "gray",
                  height: "1px",
                }}
              ></hr>
            </Box>
            <Box mt={"10px"}>
              <Flex justifyContent={"space-between"}>
                <Text fontSize={"14px"} fontWeight={"500"} color={"#515151"}>
                  Total due today
                </Text>
                <Text>$708.00</Text>
              </Flex>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            borderLeft: "6px solid black",
            height: "630px",
            position: "absolute",
            left: "50%",
            top: "0",
          }}
        ></div>
        {/* box 2 */}
        <Box paddingLeft={"70px"} w={"50%"} paddingRight={"50px"} h={"700px"}>
          <Box mt={"40px"}>
            <Text
              fontSize={"20px"}
              mb={"10px"}
              fontWeight={"500"}
              color={"gray"}
            >
              Pay with card
            </Text>
            <InputGroup>
              <InputLeftAddon children="Email" />
              {/* placeholder and value of login email  TODO*/}
              <Input type="email" placeholder="" />
            </InputGroup>
          </Box>
          <Box>
            <Text
              color={"#8b8b8b"}
              mt={"10px"}
              fontSize={"12px"}
              fontWeight={"500"}
            >
              Card Information
            </Text>
            <Box>
              <Input
                borderBottomLeftRadius={"0px"}
                borderBottomRightRadius={"0px"}
                placeholder="1234 1234 1234 1234"
              />
              <HStack spacing={"0px"}>
                <Input
                  borderTop={"none"}
                  borderTopLeftRadius={"0px"}
                  borderTopRightRadius={"0px"}
                  placeholder="MM / YY"
                />
                <Input
                  borderTop={"none"}
                  borderTopLeftRadius={"0px"}
                  borderTopRightRadius={"0px"}
                  placeholder="CVC"
                />
              </HStack>
            </Box>
          </Box>
          <Box>
            <Text
              mt={"10px"}
              fontSize={"12px"}
              fontWeight={"500"}
              color={"#8b8b8b"}
            >
              Name on Card
            </Text>
            <Input />
          </Box>
          <Box>
            <Text
              mt={"10px"}
              fontSize={"12px"}
              fontWeight={"500"}
              color={"#8b8b8b"}
            >
              {" "}
              Country or region
            </Text>
            <Input />
          </Box>
          <Box
            mt={"15px"}
            borderRadius={"10px"}
            border={" 1px solid #dedede"}
            padding={"5px"}
          >
            <Checkbox>
              <Text marginLeft={"2px"} fontSize={"15px"}>
                Save my info for 1-click checkout
              </Text>
              <Text marginLeft={"2px"} fontSize={"12px"}>
                Pay faster on Lumen5 Technologies and thousands of sites.
              </Text>
            </Checkbox>
          </Box>
          <Box mt={"10px"} mb={"10px"}>
            <Button w={"100%"}>Subscribe</Button>
          </Box>
          <Box>
            <Text fontSize={"13px"} textAlign={"center"}>
              By confirming your subscription, you allow Lumen5 Technologies Ltd
              to charge your card for this payment and future payments in
              accordance with their terms. You can always cancel your
              subscription.
            </Text>
          </Box>
        </Box>
      </HStack>
    </Container>
  );
};

export default Payment;
