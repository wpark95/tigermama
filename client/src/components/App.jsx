import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import Header from './Header';
import Home from './Home';
// import OrderOnline from './OrderOnline';
// import ContactUs from './ContactUs';
// import Menu from './Menu';

const Header = lazy(() => import('./Header'));
// const Home = lazy(() => import('./Home'));
const OrderOnline = lazy(() => import('./OrderOnline'));
const ContactUs = lazy(() => import('./ContactUs'));
const Menu = lazy(() => import('./Menu'));

const app = () => (

  <Router>
    <div className="app">
    <Suspense fallback={<div>Loading...</div>}>

      <Header />
    </Suspense>

        <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/order-online" component={OrderOnline} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/menu" component={Menu} />
        </Suspense>
          <Route path="/" component={Home} />
        </Switch>
    </div>
  </Router>

);

export default app;
