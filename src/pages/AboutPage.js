/**
 * React Example
 * Copyright (C) 2016, Michiel Sikma
 */

import React from 'react';

import SubHeader from '../components/SubHeader';
import ThreeColumns from '../components/ThreeColumns';

const AboutPage = () => (
  <div className="page about">
    <SubHeader title="About" />
    <ThreeColumns />
  </div>
);

export default AboutPage;
