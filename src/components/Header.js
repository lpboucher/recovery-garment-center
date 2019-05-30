import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ScrollToSection from './ScrollToTop';
import SelectLanguage from './SelectLanguage';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button } from 'reactstrap';

const Header = ({logo, bouton, languages, currentLocation}) => (
  <Fragment>
    <Navbar color="light" light expand="md" className="fixed-top">
      <NavbarBrand className="px-3" style={{minWidth: '300px'}}>
        <Img fluid={logo.fluid}/>
      </NavbarBrand>
        <Nav className="w-100 d-flex justify-content-end align-items-center" navbar>
          <NavItem className="px-2">
              <Button className="p-3 text-uppercase" style={{backgroundColor: '#0074B4', borderColor: '#0074B4'}}>
                <ScrollToSection loc='footer-contact'>
                  {bouton}
                </ScrollToSection>
              </Button>
          </NavItem>
          <SelectLanguage loc={currentLocation} langs={languages} />
        </Nav>
    </Navbar>
  </Fragment>
)

export const query = graphql`
  fragment HeaderItems on ContentfulHeader {
    bouton
    logo {
        id
        fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid
      }
    }
  }
`;

export default Header;