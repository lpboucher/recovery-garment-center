import React, { Fragment } from 'react';
import Scroll from 'react-scroll-to-element';

const ScrollToSection = ({loc, children}) => {
    return (
        <Fragment>
            {typeof window !== 'undefined'
            && Scroll
            && 
            <Scroll type="id" element={loc}>
                {children}
            </Scroll>}
        </Fragment>
    );
};

export default ScrollToSection;