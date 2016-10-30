/**
 * React Example
 * Copyright (C) 2016, Michiel Sikma
 */

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TopicsPage from './pages/TopicsPage';

const Routes = () => (
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path="/" components={{ content: HomePage }} />
      <Route path="/about" components={{ content: AboutPage }} />
      <Route path="/topics" components={{ content: TopicsPage }}>
        <Route path="/topics/:topicName" />
      </Route>
    </Route>
  </Router>
);

export default Routes;
