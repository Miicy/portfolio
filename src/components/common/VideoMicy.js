import React from "react";
import video from "../../media/micy.mp4";

function VideoMicy() {

  return (
    <div style={{zIndex: 1}}>
      <video autoPlay playsInline muted loop id="Video" src={video}>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoMicy;