import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import SelectLanguage from './SelectLanguage';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button } from 'reactstrap';

const Header = (props) => (
  <Fragment>

<Navbar color="light" light expand="md">
          <NavbarBrand href="/">Recovery Garment Center</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">
                  <Button>
                    Contact Us
                  </Button>
                </Link>
              </NavItem>
              <SelectLanguage langs={props.langs} />
            </Nav>
        </Navbar>
  </Fragment>
)

export default Header;