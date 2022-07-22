import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BtnComponent from "./BtnComponent";
import CustomerReview from "./CustomerReview";
import PlanTable from "./PlanTable";
import PricingCard from "./PricingCard";
import styles from "./Pricing.module.css";
import FrequentQues from "./FrequentQues";
// import pricingImg from "./Pricing.png";

const Pricing = () => {
  const [billMonthly, setBillMonthly] = useState(true);
  const [billYearly, setBillYearly] = useState(false);
  const isAuth = true;

  const handleSignUp = () => {
    //if is auth true go to dashboard
    // else go to signup
  };
  const handleBillMonthly = () => {
    setBillMonthly(true);
    setBillYearly(false);
  };
  const handleBillYearly = () => {
    setBillMonthly(false);
    setBillYearly(true);
  };
  return (
    <Box align="center" justify="center" mt={"150px"}>
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
        <Box
          w={"800px"}
          justifyContent={"center"}
          alignItems={"center"}
          marginLeft={"-100px"}
        >
          <Text
            textAlign={"center"}
            pt={"20px"}
            fontSize={"calc(1.35625rem + 1.275vw)"}
            fontWeight="650"
            lineHeight={"50px"}
            letterSpacing="2px"
          >
            Plans for your video content creation strategy
          </Text>
        </Box>
        <Box
          justifyContent={"center"}
          margin={"auto"}
          h={"63px"}
          border={"1px solid #48505e"}
          w={"253px"}
          borderRadius={"30px"}
          mt={"50px"}
          ml={"170px"}
          mb={"80px"}
        >
          <Flex align="center" justify="center">
            <ButtonGroup variant="outline" spacing={"-0.1"} cursor={"pointer"}>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"61px"}
                fontSize={"20px"}
                onClick={handleBillMonthly}
                className={
                  billMonthly ? styles.stybillActive : styles.stybillDeactive
                }
                _hover={"backgroundColor:"}
                transition={"all ease-in-out .01s"}
              >
                Bill monthly
              </Button>
              <Button
                borderRadius={"30px"}
                border={"none"}
                fontWeight={"400"}
                h={"61px"}
                fontSize={"20px"}
                onClick={handleBillYearly}
                className={
                  billYearly ? styles.stybillActive : styles.stybillDeactive
                }
                _hover={"backgroundColor:"}
                transition={"all ease-in-out .01s"}
              >
                Bill yearly
              </Button>
            </ButtonGroup>
          </Flex>
        </Box>
      </Container>
      <Flex
        justifyContent={"center"}
        mt="30px"
        margin={"auto"}
        gap={"20px"}
        w={"80%"}
      >
        <PricingCard
          sizeGiven={"100%"}
          title="Community"
          description="For casual and video enthusiasts"
          cost="$0"
          costDescription="forever free"
          btnLabel={isAuth ? "Current Plan" : "Get Started"}
          includeHeading="What's included "
          billMonthly={billMonthly}
          includeList={[
            { title: "Unlimited videos" },
            { title: "Contains Lumen5 watermark" },
            { title: "720 video resolution" },
          ]}
        />

        <PricingCard
          sizeGiven={"100%"}
          title="Starter"
          description="For the individual content creator"
          cost={billMonthly ? "$79" : "$59"}
          costDescription="per month, billed yearly"
          btnLabel={isAuth ? "Upgrade" : "Get Started"}
          includeHeading="Everything in Free, plus"
          includeList={[
            { title: "No Lumen5 branding" },
            { title: "50M stock photos & videos" },
            { title: "Custom colors & styles" },
            { title: "1080p video resolution" },
          ]}
        />

        <PricingCard
          sizeGiven={"100%"}
          title="Professional"
          description="For the professional video storyteller"
          cost={billMonthly ? "$199" : "$149"}
          costDescription="per month, billed yearly"
          btnLabel={isAuth ? "Upgrade" : "Get Started"}
          status={"active"}
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
          sizeGiven={"100"}
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
            <BtnComponent status={"active"} label={"Get Started Today"} />
          </Box>
        </Flex>
      </Box>
      {/* Customer REview */}
      <CustomerReview />
      {/* Choose plan table  */}
      <Box h={"auto"} w={"100%"}>
        <Container h={"auto"} maxW={"1260px"}>
          <Text
            letterSpacing={"0.7px"}
            fontSize="30px"
            fontWeight={"440"}
            m={"40px 0px 40px"}
          >
            Choose the plan that's right for you
          </Text>
          <PlanTable />
        </Container>
      </Box>
      {/* frequent question */}
      <Box>
        <Text fontSize="25px" fontWeight={"400"} m={"100px 0px 40px"}>
          A few frequently asked questions
        </Text>
        <FrequentQues />
      </Box>
      <Box mt={"120px"} mb={"80px"}>
        {/* <Image src={pricingImg} onClick={handleSignUp} /> */}
      </Box>
    </Box>
  );
};

export default Pricing;
