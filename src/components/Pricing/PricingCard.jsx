import { CheckIcon } from "@chakra-ui/icons";
import { Box, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import BtnComponent from "./BtnComponent";

const PricingCard = ({
  title,
  description,
  cost,
  costDescription,
  btnLabel,
  includeHeading,
  sizeGiven,
  status,
  includeList,
}) => {
  return (
    <Box>
      <Box
        textAlign={"left"}
        h={"39  0px"}
        w={"210px"}
        border={"2px solid #f1f2f5"}
        borderRadius={"10px"}
        padding={"10px 20px 40px"}
        marginBottom={"40px"}
        justifyContent={"center"}
        margin={"auto"}
      >
        <Box>
          <Text
            mt={"50px"}
            fontWeight={"600"}
            fontSize={"21px"}
            lineHeight={"22px"}
            color={"black"}
          >
            {title}
          </Text>
          <Text mt={"10px"} fontSize="12px" lineHeight="18px">
            {description}
          </Text>
        </Box>
        <Box mt={"40px"} mb={"50px"}>
          <Text
            fontWeight={"650"}
            fontSize={"25px"}
            color={"black"}
            lineHeight={"22px"}
          >
            {cost}
            {title === "Community" || title === "Enterprise" ? (
              ""
            ) : (
              <span
                style={{
                  fontWeight: "500",
                  fontSize: "20px",
                  marginLeft: "5px",
                }}
              >
                USD
              </span>
            )}
          </Text>
          <Text mt={"10px"} fontSize={"12px"} lineHeight="18px">
            {costDescription}
          </Text>
        </Box>
        <Box mb={"10px"}>
          <BtnComponent
            label={btnLabel}
            sizeGiven={sizeGiven}
            status={status}
          />
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
              <span fontSize={"12px"} > {item.title}</span>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PricingCard;
