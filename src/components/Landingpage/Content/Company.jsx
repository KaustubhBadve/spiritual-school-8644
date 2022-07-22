import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Company = () => {
  return (
    <div className="company-p">
      <Box>
        <Text fontSize="21px" color="#24282F" textAlign="center">
          Over 6 million videos created by thousands of businesses
        </Text>
      </Box>
      <Flex gap={10} marginLeft="17%" marginBottom="2%">
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png" />
        <Image src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png" />
      </Flex>
    </div>
  );
};

export default Company;
