import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Homepage.css";

const EnterpriseNavbar = () => {
  const [create, setCreate] = useState(false);
  const [learn, setLearn] = useState(false);
  const handleDropdown = () => {
    setCreate(!create);
    setLearn(false);
  };
  const handleLearn = () => {
    setLearn(!learn);
    setCreate(false);
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light header-container px-md-5"
        style={{ backgroundColor: "#24282f" }}
      >
        <div className="d-flex pl-md-4 ml-md-5">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
              className="rounded float-left nav-bar__logo"
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
              alt="Lumen5 Logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsedBarId"
          aria-controls="collapsedBarId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
        <div
          className="collapse navbar-collapse mr-lg-5 justify-content-end"
          id="collapsedBarId" style={{marginLeft:"38%"}}
        >
          <div className="d-flex">
            <div className="q-flex">
              <div className="p-flex">
                <ul className="navbar-nav">
                  <li className="nav-item dropdown mr-md-2">
                    <Link
                      className="nav-link  text-decoration-none font-l5 font-l5--regular text-dark"
                      to="#"
                      id="create-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={handleDropdown}
                    >
                      <span style={{ color: "white",fontFamily:"Poppins, sans-serif",letterSpacing:"0.01rem" }}>Create</span>

                      <i
                        className="fa fa-angle-down"
                        aria-hidden="true"
                        style={{ margin: "5px", color: "white" }}
                      ></i>
                    </Link>
                    {create && (
                      <div
                        className="dropdown-menu1"
                        aria-labelledby="create-dropdown"
                        style={{ columnCount: 2 }}
                      >
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/photo-video-maker/"
                        >
                          Photo Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/facebook-video-maker/"
                        >
                          Facebook Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/youtube-intro-maker/"
                        >
                          YouTube Intro Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/instagram-video-maker/"
                        >
                          Instagram Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/instagram-story-maker/"
                        >
                          Instagram Story Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/promo-video-maker/"
                        >
                          Promo Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/video-ad-maker/"
                        >
                          Video Ad Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/marketing-video"
                        >
                          Marketing Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/linkedin-video/"
                        >
                          LinkedIn Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/business-video-maker/"
                        >
                          Business Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/ecommerce-video/"
                        >
                          Ecommerce Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/explainer-videos/"
                        >
                          Explainer Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/slideshow-maker/"
                        >
                          Slideshow Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/education-video/"
                        >
                          Education Video Maker
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/video-editor/"
                        >
                          Video Editor
                        </Link>
                        <Link
                          className="dropdown-item1 font-l5"
                          to="/voiceover/"
                        >
                          Voiceover
                        </Link>
                      </div>
                    )}
                  </li>

                  <li className="nav-item mr-md-2" style={{ color: "white" }}>
                    <Link
                      className="nav-link text-decoration-none text-dark font-l5 font-l5--regular"
                      to="/pricing/"
                    >
                      <span style={{ color: "white" }}>Pricing</span>
                    </Link>
                  </li>
                  <li className="nav-item mr-md-2">
                    <Link
                      className="nav-link text-decoration-none text-dark font-l5 font-l5--regular"
                      to="/enterprise/"
                    >
                      <span style={{ color: "white" }}>Enterprise</span>
                    </Link>
                  </li>
                  <li className="nav-item mr-md-2">
                    <Link
                      className="nav-link text-decoration-none text-dark font-l5 font-l5--regular"
                      to="/case-studies/"
                    >
                      <span style={{ color: "white" }}>Case studies</span>
                    </Link>
                  </li>
                  <li className="nav-item mr-md-2 dropdown">
                    <Link
                      className="nav-link  text-decoration-none font-l5 font-l5--regular text-dark"
                      to="#"
                      id="learn-dropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={handleLearn}
                    >
                      <span style={{ color: "white" }}>Learn</span>

                      <i
                        className="fa fa-angle-down"
                        aria-hidden="true"
                        style={{ margin: "5px", color: "white" }}
                      ></i>
                    </Link>
                    {learn && (
                      <div
                        className="dropdown-menu1"
                        aria-labelledby="learn-dropdown"
                      >
                        <Link className="dropdown-item1" to="/learn/resources">
                          Resources
                        </Link>
                        <Link className="dropdown-item1" to="/learn/">
                          Blog
                        </Link>
                      </div>
                    )}
                  </li>
                  <li className="nav-item mr-md-2 mb-2">
                    <Link
                      to="/auth/login/"
                      type="button"
                      className="lumen5-button2"
                      style={{
                        backgroundColor: "#24282f",
                        color: "white",
                        border: "1px solid white",
                      }}
                    >
                      <span>Login</span>
                    </Link>
                  </li>
                  <li className="nav-item mb-2">
                    <Link
                      to="/auth/signup/"
                      type="button"
                      className="lumen5-button"
                    >
                      <span>Sign&nbsp;up</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EnterpriseNavbar;