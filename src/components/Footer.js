import React from 'react';

import FooterItem from './FooterItem';

import {
    Container,
    Row } from 'reactstrap';

const Footer = ({data}) => {
    return (
        <Container fluid id="footer-contact">
            <Row className="p-4 pt-5 bg-dark">
            {data.edges.map(item => (
                <FooterItem 
                    key={item.node.id}
                    title={item.node.nom}
                    description={item.node.information}
                />
            ))
            }
            </Row>
            <Row className="text-center bg-light">
                <p className="py-3 my-0 mx-auto text-secondary">Recovery Garment Center. All Rights Reserved 2019.</p>
            </Row>
        </Container>
    );
};

export default Footer;