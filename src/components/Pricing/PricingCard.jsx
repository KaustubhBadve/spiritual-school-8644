import { CheckIcon } from "@chakra-ui/icons";
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
import BtnComponent from "./BtnComponent";

const PricingCard = ({
  title,
  description,
  cost,
  costDescription,
  btnLabel,
  includeHeading,
  billMonthly,
  includeList,
}) => {
  return (
    <Box>
      <Box
        textAlign={"left"}
        h={"350px"}
        w={"250px"}
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
          <BtnComponent label={btnLabel}  />
        </Box>
      </Box>
      <Box textAlign={"left"}>
        <Heading m={"30px 10px 20px"} as="h6" size="xs">
          {includeHeading}
        </Heading>
        <List padding={"10px"} spacing={2} m={"5px"}>
          {includeList.map((item, index) => (
            <ListItem>
              <ListIcon key={index} as={CheckIcon} color="green.500" />
              {item.title}
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PricingCard;
