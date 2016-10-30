/**
 * React Example
 * Copyright (C) 2016, Michiel Sikma
 */

import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar
      staticTop
      componentClass="header"
      className="top-nav"
      role="banner"
    >
      <Navbar.Header>
        <Nav role="navigation" className="home">
          <LinkContainer to="/">
            <NavItem>Home</NavItem>
          </LinkContainer>
        </Nav>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="bs-navbar-collapse">
        <Nav pullRight role="navigation" id="top">
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/topics">
            <NavItem>Topics</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Navigation;


