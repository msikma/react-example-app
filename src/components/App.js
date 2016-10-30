/**
 * React Example
 * Copyright (C) 2016, Michiel Sikma
 */

import React from 'react';

import Navigation from './Navigation';

import './App.css';

const App = (props) => {
  const { content } = props;
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        {content}
      </div>
    </div>
  )
};

export default App;
