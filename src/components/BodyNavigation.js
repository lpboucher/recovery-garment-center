import React from 'react';

//import BodyNavItem from './BodyNavItem';
import Mannequin from './Mannequin';

import { Container } from 'reactstrap';

const navText = {
    heading: {
        en: 'Discover our Products',
        fr: 'Decouvrez nos Produits',
    },
    sub: {
        en: 'You can navigate our products with the below interactive mannequin',
        fr: 'Vous pouvez utiliser le mannequin interactif pour naviguer nos produits',
    }
}

const BodyNavigation = ({data, loc}) => {
    const navs = data.edges;
    return (
        <Container fluid className="p-5 text-center">
            <h1 className="text-uppercase">{loc === "/fr-CA/" ? navText.heading.fr : navText.heading.en}</h1>
            <p>{loc === "/fr-CA/" ? navText.sub.fr : navText.sub.en}</p>
            { /*navs.map(nav => 
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