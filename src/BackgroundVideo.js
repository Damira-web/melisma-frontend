import React from 'react';
import video from "../src/images/studio.mp4";


const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export { BackgroundVideo };