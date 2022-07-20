import {
  Box,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Pricing.module.css";

const PricingCard = ({
  title = "Community",
  description = "For casual video enthusiasts",
  cost = "$0",
  costDescription = "forever free",
  btnLabel = "Get Started",
  includeHeading = "What's included  ",
  includeList = [
    { title: "Unlimited videos" },
    { title: "Unlimited videos" },
    { title: "Unlimited videos" },
    { title: "Unlimited videos" },
  ],
}) => {
  return (
    <Box>
      <Box
        textAlign={"left"}
        h={"350px"}
        border={"1px solid gray"}
        padding={"20px"}
        borderRadius={"10px"}
      >
        <Box>
          <Text
            mt={"30px"}
            fontWeight={"600"}
            fontSize={"20px"}
            lineHeight={"22px"}
          >
            {title}
          </Text>
          <Text>{description}</Text>
        </Box>
        <Box mt={"40px"} mb={"70px"}>
          <Text fontWeight={"600"} fontSize={"20px"} lineHeight={"22px"}>
            {cost}
          </Text>
          <Text>{costDescription}</Text>
        </Box>
        <Box>
          <Button
            _hover={{backgroundColor:"#5846f6",color:"white"}}
            w={"100%"}
            h={"50px"}
            fontWeight={"400"}
            border={"1px solid blue"}
            borderRadius={"30px"}
            bgColor={"white"}
          >
            {btnLabel}
          </Button>
        </Box>
      </Box>
      <Box textAlign={"left"} padding={"10px"}>
        <Heading as="h5" sixe="sm">{includeHeading}:</Heading>
        <List padding={"10px"}>
          {includeList.map((item) => (
            <ListItem>
              <ListIcon color="green.500" />
              {item.title}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PricingCard;
