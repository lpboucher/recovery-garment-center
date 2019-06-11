import React from 'react';

//import BodyNavItem from './BodyNavItem';
import Mannequin from './Mannequin';
import { navText } from '../data/translations';

import { Container } from 'reactstrap';

const BodyNavigation = ({data, loc}) => {
    const navs = data.edges;
    return (
        <Container fluid className="p-5 text-center">
            <h1 className="text-uppercase">{loc === "fr-CA" ? navText.heading.fr : navText.heading.en}</h1>
            <p>{loc === "fr-CA" ? navText.sub.fr : navText.sub.en}</p>
            { /* to be deleted, now as a placeholder if client wants to keep
            navs.map(nav => 
                <BodyNavItem 
                    key={nav.node.id}
                    {...nav.node}
                />
            ) */}
            <Mannequin />
        </Container>
    );
};

export default BodyNavigation;