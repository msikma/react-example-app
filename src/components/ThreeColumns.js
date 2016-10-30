/**
 * React Example
 * Copyright (C) 2016, Michiel Sikma
 */

import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import cal from '../images/cal.svg';
import copy from '../images/copy.svg';
import safari from '../images/safari.svg';
import './ThreeColumns.css';

const ThreeColumns = () => (
  <Grid className="component three-columns">
    <Row>
      <Col md={4} className="item">
        <p><img src={cal} alt="Calendar" /></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec lorem at sapien gravida convallis.</p>
      </Col>
      <Col md={4} className="item">
        <p><img src={safari} alt="Safari" /></p>
        <p>Donec odio magna, pretium at feugiat eu, imperdiet et leo. Aliquam aliquam eros non erat euismod, non cursus tellus vehicula.</p>
      </Col>
      <Col md={4} className="item">
        <p><img src={copy} alt="Copyright" /></p>
        <p>Etiam ac metus sit amet nisi maximus dignissim. Aenean venenatis orci a leo imperdiet vulputate.</p>
      </Col>
    </Row>
  </Grid>
);

export default ThreeColumns;

