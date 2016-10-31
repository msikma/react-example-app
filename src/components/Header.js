/**
 * React test application
 * (C) 2016, Michiel Sikma
 */
import React, { Component } from 'react';
import { Grid, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';

import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.joinEnabled = false;
  }
  enableJoinButton = () => {
    this.joinEnabled = true;
  }
  disableJoinButton = () => {
    this.joinEnabled = false;
  }
  pressButton = (ev) => {
    // Send the user to the About page if we're hovering over the join button
    // and they press "a".
    if (String.fromCharCode(ev.which) === 'A' && this.joinEnabled) {
      browserHistory.push('/about');
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.pressButton, false);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.pressButton);
  }
  render() {
    return (
      <Jumbotron className="header">
        <Grid>
          <h1>React Example App</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce urna risus, tempus ac malesuada et, condimentum in nulla. Donec id urna vitae nisl pretium luctus id at nibh.</p>
          <p>Press "a" while hovering over the join button to go to the About page.</p>
          <p>
            <LinkContainer to="/">
              <Button bsSize="large" onMouseOver={this.enableJoinButton} onMouseOut={this.disableJoinButton}>Join now</Button>
            </LinkContainer>
          </p>
        </Grid>
      </Jumbotron>
    )
  }
}

export default Header;

