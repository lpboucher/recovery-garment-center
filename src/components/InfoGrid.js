import React from 'react';
import { graphql } from 'gatsby';

import InfoGridItem from './InfoGridItem';

import {
    Container,
    Row } from 'reactstrap';

const InfoGrid = ({data}) => {
    const infoItems = data.edges;
    return (
        <Container fluid id="top-navbar" className="bg-light">
            <Row className="px-4 pt-4 d-flex">
            {infoItems.map(item => 
                <InfoGridItem 
                    key={item.node.id}
                    {...item.node}/>
            )}
            </Row>
        </Container>
    );
};

export default InfoGrid;