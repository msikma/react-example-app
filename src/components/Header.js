/**
 * React test application
 * (C) 2016, Michiel Sikma
 */
import React from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Header.css';

const Header = () => (
  <Jumbotron className="header">
    <Grid>
      <h1>React Example App</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna risus, tempus ac malesuada et, condimentum in nulla. Donec id urna vitae nisl pretium luctus id at nibh.</p>
      <p>
        <LinkContainer to="/">
          <Button bsSize="large">Join now</Button>
        </LinkContainer>
      </p>
    </Grid>
  </Jumbotron>
);

export default Header;

