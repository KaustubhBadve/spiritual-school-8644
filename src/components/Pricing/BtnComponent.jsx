import { Button, StylesProvider } from "@chakra-ui/react";
import React from "react";
import styles from "./Pricing.module.css"
const BtnComponent = ({ label, sizeGiven, status }) => {
  return (
    <Button
      _hover={{ backgroundColor: "#5846f6", color: "white" }}
      h={"50px"}
      fontWeight={"400"}
      border={"1px solid blue"}
      borderRadius={"30px"}
      bgColor={label === "Current Plan" ? "#5846f6" : "white"}
      color={label === "Current Plan" ? "white" : "#5846f6"}
      size={sizeGiven === 100 ? "100%" : "lg"}
      disabled={label === "Current Plan"}
      className={status === "active" ? styles.activeBtn : ""}
    >
      {label}
    </Button>
  );
};

export default BtnComponent;
