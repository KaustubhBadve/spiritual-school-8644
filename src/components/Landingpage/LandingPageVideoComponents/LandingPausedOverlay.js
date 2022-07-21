import { css } from "@emotion/css";

const LandingPausedOverlay = ({imgp}) => (
  <div>
    <img
      src={imgp}
      alt=""
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
      `}
    />
   
  </div>
);

export default LandingPausedOverlay;
