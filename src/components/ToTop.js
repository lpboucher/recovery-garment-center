import React, { Fragment } from 'react';
import ScrollToSection from './ScrollToTop';

import {
    Button
  } from 'reactstrap';

const ToTop = () => {
    return (
        <Fragment>
            <ScrollToSection loc='top-navbar'>
                <Button style={{position: 'fixed', bottom: '5%', right: '5%', zIndex: '10'}} >&#x21D1;</Button>
            </ScrollToSection>
        </Fragment>
    );
};

export default ToTop;