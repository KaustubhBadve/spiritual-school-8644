import React from "react";
import { Routes, Route } from "react-router-dom";
import TempSelection from "./Template Selection/TempSelectionCombine";
import LoadingafterTemplate from "./Template Selection/loadingafterTemplate";
import VideoConversionCombine from "./Video Conversion/VideoConversionCombine";
import CompletePricing from "../components/Pricing/CompletePricing";

const MainRoutings = () => {
  return (
    <Routes>
      <Route path="/selectTemplate" element={<TempSelection />} />
      <Route
        path="/blogtoVideoConversion"
        element={<VideoConversionCombine />}
      />
      <Route path="/pricing" element={<CompletePricing />} />
      {/* <Route path='/auth/signup' />
        <Route path='/auth/login' /> */}
    </Routes>
  );
};

export default MainRoutings;
