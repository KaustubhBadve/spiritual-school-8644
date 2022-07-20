import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BtnComponent from "./BtnComponent";
import CustomerReview from "./CustomerReview";
import PlanTable from "./PlanTable";
import PricingCard from "./PricingCard";
import styles from "./Pricing.module.css"
const Pricing = () => {
  const [billMonthly, setBillMonthly] = useState(true);
  const [billYearly, setBillYearly] = useState(false);
  const isAuth = true;

  const handleBillMonthly = () => {};
  return (
    <Box align="center" justify="center">
      <Container maxW={"50%"}>
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
          h={"60px"}
          border={"1px solid #48505e"}
          w={"256px"}
          borderRadius={"30px"}
          m={"50px 50px"}
        >
          <Flex align="center" justify="center">
            <ButtonGroup variant="outline" spacing={"-0.1"} cursor={"pointer"}>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"60px"}
                fontSize={"20px"}
                onClick={handleBillMonthly}
                className = {billMonthly ? styles.stybillActive : ""}
              >
                Bill monthly
              </Button>
              <Button
                borderRadius={"30px"}
                h={"60px"}
                fontWeight={"400"}
                border={"none"}
                fontSize={"20px"}
                className = {billMonthly ? styles.stybillActive : ""}
              
              >
                Bill yearly
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Container>
      <Flex justifyContent={"center"} mt="30px" gap={"20px"}>
        <PricingCard
          title="Community"
          description="For casual video enthusiasts"
          cost="$0"
          costDescription="forever free"
          // btnLabel={`isAuth ? "Current Plan":"Get Started"  `}
          btnLabel={"Get Started"}
          includeHeading="What's included "
          billMonthly={billMonthly}
          includeList={[
            { title: "Unlimited videos" },
            { title: "Contains Lumen5 watermark" },
            { title: "720 video resolution" },
          ]}
        />

        <PricingCard
          title="Starter"
          description="For the individual content creator"
          cost="$59 USD"
          costDescription="per month, billed yearly"
          btnLabel="Get Started"
          includeHeading="Everything in Free, plus"
          includeList={[
            { title: "No Lumen5 branding" },
            { title: "50M stock photos & videos" },
            { title: "Custom colors & styles" },
            { title: "1080p video resolution" },
          ]}
        />

        <PricingCard
          title="Professional"
          description="For the professional video storyteller"
          cost="$149 USD"
          costDescription="per month, billed yearly"
          btnLabel="Get Started"
          includeHeading="Everything in Starter, plus"
          includeList={[
            { title: "50M stock photos & videos" },
            { title: "Custom watermarks" },
            { title: "Upload your own fonts" },
            { title: "Multiple saved templates" },
            { title: "Multiple brand kits" },
          ]}
        />

        <PricingCard
          title="Enterprise"
          description="For marketing & communication team"
          cost="Custom"
          costDescription="per month, billed yearly"
          btnLabel="Learn More"
          includeHeading="Everything in Professional, plus"
          includeList={[
            { title: "Lumen5 design team" },
            { title: "Bespoke branded templates" },
            { title: "Dedicated customer success" },
            { title: "Teams & collaboration" },
            { title: "Enterprise-level security" },
          ]}
        />
      </Flex>
      <Box m={"30px 0px 30px"}>
        <Box>
          <Text mb={"50px"} fontSize="2xl">
            Over 6 million videos created by thousands of businesses
          </Text>
        </Box>

        <Flex
          w={"25%"}
          align="center"
          justify="center"
          justifyContent={"space-around"}
        >
          <Box>
            {/* scroll */}
            <BtnComponent label={"Compare Plan"} />
          </Box>
          <Box>
            <Text> or</Text>
          </Box>

          <Box>
            <BtnComponent label={"Get Started Today"} />
          </Box>
        </Flex>
      </Box>
      {/* Customer REview */}
      <CustomerReview />
      {/* Choose plan table  */}
      <Box h={"auto"} w={"100%"}>
        <Container h={"auto"} maxW={"1260px"}>
          <Text fontSize="30px" fontWeight={"400"}  m={"40px 0px 40px"}>
            Choose the plan that's right for you
          </Text>
          <PlanTable />
        </Container>
      </Box>
    </Box>
  );
};

export default Pricing;
