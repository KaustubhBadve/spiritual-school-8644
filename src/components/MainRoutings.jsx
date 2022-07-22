import React from "react";
import { Routes, Route } from "react-router-dom";
import TempSelection from "./Template Selection/TempSelectionCombine";
import VideoConversionCombine from "./Video Conversion/VideoConversionCombine";
import LandingPage from "./Landingpage/LandingPage";
import CompletePricing from "./Pricing/CompletePricing";
import Login from "./Login&Signup/Login";

import CombineAllUserDas from "./user Dashboard/CombineAllUserDas";
import Otp from "./Payment/Otp";
import Confirmation from "./Payment/Confirmation";
import Payment from "./Payment/Payment";
import { Text } from "@chakra-ui/react";
import SignUp from "./Login&Signup/SignUp";
import EnterpriseContent from "./Enterprise/EnterpriseContent";

const MainRoutings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<CompletePricing />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/otpcheck" element={<Otp />} />
      <Route path="/confirmation" element={<Confirmation />} />

      <Route path="/enterprise" element={<EnterpriseContent />} />
      {/* TODO  req auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/selectTemplate" element={<TempSelection />} />
      <Route path="/dashboard" element={<CombineAllUserDas />} />
      <Route
        path="/blogtoVideoConversion"
        element={<VideoConversionCombine />}
      />
      {/* <Route path="/finalvideoconversion" element ={<FinalVideoConversion/>} /> */}
      <Route
        path="*"
        element={<Text fontSize={"100px"}>Page not found!..</Text>}
      />
    </Routes>
  );
};

export default MainRoutings;
