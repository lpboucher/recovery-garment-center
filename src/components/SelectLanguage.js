import React from 'react';
import PropTypes from 'prop-types';

import { NavItem } from 'reactstrap';

const redirect = (location) => {
  if (typeof window !== 'undefined') {
    window.location.replace(location);
  }
}

const SelectLanguage = ({langs, loc}) => {
  const shownLanguage = langs.find(lang => lang.link !== loc);
  return ( 
        <NavItem >
            <a 
              onClick={() => redirect(shownLanguage.link)}
              key={shownLanguage.langKey}
              className="text-uppercase p-3"
              style={{cursor: 'pointer'}}
            >
              {shownLanguage.langKey.slice(0,2)}
            </a>
        </NavItem>
    )
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;