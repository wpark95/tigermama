import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import postmatesIcon from '@iconify-icons/simple-icons/postmates';
import ubereatsIcon from '@iconify-icons/simple-icons/ubereats';
import doordashIcon from '@iconify-icons/simple-icons/doordash';

const orderOnline = () => (
  <div className="body-container body-container-order">
    <h1>Order Tiger Mama Online!</h1>
    <div className="online-order-links-container">
      <Link to={{ pathname: "https://www.doordash.com/store/tiger-mama-asian-burgers-x-wings-dallas-1608605" }} target="_blank">
        <Icon id="online-order-link-icon" icon={doordashIcon} />
      </Link>
      <Link to={{ pathname: "https://www.ubereats.com/dallas/food-delivery/tiger-mama-katsu-burgers-x-wings-921-w-commerce-st/w_9dRhGGTpWSykZsUaBJhA" }} target="_blank">
        <Icon id="online-order-link-icon" icon={ubereatsIcon} />
      </Link>
      <Link to={{ pathname: "https://postmates.com/merchant/tiger-mama-katsu-burgers-x-wings-dallas" }} target="_blank">
        <Icon id="online-order-link-icon" icon={postmatesIcon} />
      </Link>
    </div>
  </div>
);

export default orderOnline;
