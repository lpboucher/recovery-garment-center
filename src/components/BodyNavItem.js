import React from 'react';
import { graphql } from 'gatsby';
import Scroll from 'react-scroll-to-element';

const BodyNavItem = ({id, nom}) => {
    return (
        <Scroll type="id" element={id}>
            <a href="#">{nom}</a>
        </Scroll>
    );
};


export default BodyNavItem;