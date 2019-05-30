import React from 'react';
import PropTypes from 'prop-types';

import { NavItem } from 'reactstrap';

const SelectLanguage = ({langs, loc}) => {
  const shownLanguage = langs.find(lang => lang.link !== loc);
  return ( 
        <NavItem >
            <a 
              href={shownLanguage.link}
              key={shownLanguage.langKey}
              className="text-uppercase p-3"
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