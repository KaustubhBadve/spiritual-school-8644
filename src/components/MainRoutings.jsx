import React from 'react'
import {Routes,Route} from "react-router-dom"
import TempSelection from './Template Selection/TempSelectionCombine'
import LoadingafterTemplate from './Template Selection/loadingafterTemplate'
import VideoConversionCombine from './Video Conversion/VideoConversionCombine'

const MainRoutings = () => {
  return (
    <Routes>
    <Route path='/selectTemplate' element={<TempSelection/>}/>
    {/* <Route path='/loading' element={<LoadingafterTemplate/>}/> */}
    <Route path='/blogtoVideoConversion' element={<VideoConversionCombine/>}/>
    </Routes>
  )
}

export default MainRoutings