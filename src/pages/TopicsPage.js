/**
 * React Example
 * Copyright (C) 2016, Michiel Sikma
 */

import React from 'react';
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SubHeader from '../components/SubHeader';
import './TopicsPage.css';

const TopicsPage = ({ params }) => (
  <div className="page topics">
    <SubHeader title="Topics" />
    <div className="sub-topics">
      <Grid>
        <Row>
          <Col md={12}>
            <Nav bsStyle="tabs" activeKey="1">
              <LinkContainer to="/topics/stuff">
                <NavItem eventKey="1">Stuff</NavItem>
              </LinkContainer>
              <LinkContainer to="/topics/more-stuff">
                <NavItem eventKey="1">More stuff</NavItem>
              </LinkContainer>
            </Nav>
          </Col>
        </Row>
      </Grid>
    </div>
  </div>
);

export default TopicsPage;
