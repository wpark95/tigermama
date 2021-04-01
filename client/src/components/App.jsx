import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Header from './Header';

const OrderOnline = lazy(() => import('./OrderOnline'));
const ContactUs = lazy(() => import('./ContactUs'));
const Menu = lazy(() => import('./Menu'));

const app = () => (
  <Router>
    <div className="app">
      <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Route path="/order-online" component={OrderOnline} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/menu" component={Menu} />
    </Suspense>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

export default app;
