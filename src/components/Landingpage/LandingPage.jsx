import React from 'react'
import BlogPost from './Content/BlogPost'
import Caraousel from './Content/Caraousel'
import Color from './Content/Color'
import LandingPageContent from './Content/LandingPageContent'
import VideoImage from './Content/VideoImage'
import VideoTemplate from './Content/VideoTemplate'
import FooterLandingPage from './FooterLandingPage/FooterLandingPage'
import NavbarLandingPage from './Navbar/NavbarLandingPage'

const LandingPage = () => {
  return (
    <div>
        <NavbarLandingPage/>
     <LandingPageContent/>
     <VideoTemplate/>
     <BlogPost/>
     <VideoImage/>
     <Color/>
     <Caraousel/>
     <FooterLandingPage/>
    </div>
  )
}

export default LandingPage