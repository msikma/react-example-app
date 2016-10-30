/**
 * React test application
 * (C) 2016, Michiel Sikma
 */
import React from 'react';
import { Grid } from 'react-bootstrap';

import './SubHeader.css';

const SubHeader = (props) => (
  <div className="sub-header">
    <Grid>
      <h1>{ props.title }</h1>
    </Grid>
  </div>
);

export default SubHeader;

