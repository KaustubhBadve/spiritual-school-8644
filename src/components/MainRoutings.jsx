import React from "react";
import { Routes, Route } from "react-router-dom";
import TempSelection from "./Template Selection/TempSelectionCombine";
import VideoConversionCombine from "./Video Conversion/VideoConversionCombine";
import LandingPage from "./Landingpage/LandingPage";
import CompletePricing from "./Pricing/CompletePricing";
import Login from "./Login&Signup/Login";
import Signup from "./Redux/Signup";
import CombineAllUserDas from "./user Dashboard/CombineAllUserDas";
import Otp from "./Payment/Otp";
import Confirmation from "./Payment/Confirmation";

const MainRoutings = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pricing" element={<CompletePricing />} />
      {/* <Route path='/payment' element={<Payment/>} */}
      <Route path="/otpcheck" element={<Otp />} />
      <Route path="/confirmation" element={<Confirmation/>} />

      {/* <Route path="/enterprise" element={} /> */}
      {/* TODO  req auth */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/selectTemplate" element={<TempSelection />} />
      <Route path="/dashboard" element={<CombineAllUserDas />} />
      <Route
        path="/blogtoVideoConversion"
        element={<VideoConversionCombine />}
      />
      {/* <Route path="/finalvideoconversion" element ={<FinalVideoConversion/>} /> */}
    </Routes>
  );
};

export default MainRoutings;
