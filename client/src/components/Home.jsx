import React from 'react';

import {
  NavLink,
} from 'react-router-dom';

const home = () => (
  <div className="body-container body-container-home">
    <video id="main-video" loop autoPlay muted playsInline >
      <source src="exampleVideo.mp4" type="video/mp4" />
    </video>
    <h1>Tiger Mama Burgers</h1>
    <h2>921 W Commerce St Dallas, TX 75208</h2>
  </div>
);

export default home;
