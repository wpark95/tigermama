import React from 'react';

const home = () => (
  <div className="body-container body-container-home">
    <div className="video-container" dangerouslySetInnerHTML={{
      __html: `
      <video id="main-video" autoPlay loop muted playsInline>
        <source src="exampleVideo.mp4" type="video/mp4" />
      </video>`,
      }}>
    </div>
    <h1>Tiger Mama Burgers</h1>
    <h2>921 W Commerce St Dallas, TX 75208</h2>
  </div>
);

export default home;
