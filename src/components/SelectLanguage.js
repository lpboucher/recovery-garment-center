import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { NavItem } from 'reactstrap';

const SelectLanguage = ({langs, loc}) => {
  const shownLanguage = langs.find(lang => lang.link !== loc);
  return ( 
        <NavItem >
            <Link 
              to={shownLanguage.link}
              key={shownLanguage.langKey}
              className="text-uppercase p-3"
              style={{cursor: 'pointer'}}
            >
              {shownLanguage.langKey.slice(0,2)}
            </Link>
        </NavItem>
    )
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;