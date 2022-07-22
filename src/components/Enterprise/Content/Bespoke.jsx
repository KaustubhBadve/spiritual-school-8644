import React from "react";
import BespokeSampleTemplate from "../Bespokevideotemplate/BespokeSampleTemplate";

const Bespoke = () => {
  return (
    <div className="bespoke-container">
      <div className="bespoke-header">
        <div className="" style={{ textAlign: "center" }}>
          <span className="bespoke-span">Bespoke custom templates</span>
        </div>
        <h5 className="bespoke-h5">We work with your brand team every step of the way</h5>
      </div>
      <div className="bespoke-video">
        <div>
          <BespokeSampleTemplate
            imgp={
              "https://storage.googleapis.com/lumen5-site-images/tb_tracer.png"
            }
            video={
              "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4"
            }/>
            <div className="exploreplay-div">
              <i className="fa fa-play explore-play" aria-hidden="true"></i>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>

      </div>
    </div>
  );
};

export default Bespoke;
