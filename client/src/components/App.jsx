import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Menu from './Menu';
import ContactUs from './ContactUs';
import OrderOnline from './OrderOnline';

const app = () => (
  <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/order-online" component={OrderOnline} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/menu" component={Menu} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
);

export default app;
