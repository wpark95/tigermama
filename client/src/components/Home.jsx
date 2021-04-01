import React from 'react';

import {
  NavLink,
} from 'react-router-dom';

const home = () => (
  <div className="body-container body-container-home">
    <video id="main-video" loop autoPlay muted >
      <source src="exampleVideo.mp4" type="video/mp4"/>
    </video>
    <h1>Home Contents Place Holder</h1>
    <p>Blah Blah Blah</p>
    <p>Blah Blah Blah</p>
    <p>Blah Blah Blah</p>
  </div>
);

export default home;
