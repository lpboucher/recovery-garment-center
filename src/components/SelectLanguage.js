import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { NavItem } from 'reactstrap';

const SelectLanguage = (props) => {
  return ( 
    props.langs.map(lang =>
      //think about adding selected prop
        <NavItem>
            <Link to={lang.link} key={lang.langKey}>{lang.langKey}</Link>
        </NavItem>
    )
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;