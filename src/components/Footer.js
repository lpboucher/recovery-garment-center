import React from 'react';

import FooterItem from './FooterItem';
import Map from './Map';

import {
    Container,
    Row,
    Col } from 'reactstrap';

const Footer = ({data}) => {
    return (
        <Container fluid id="footer-contact">
            <Row className="p-5 bg-dark">
                <FooterItem 
                    key={data.edges[0].node.id}
                    title={data.edges[0].node.nom}
                    description={data.edges[0].node.information}
                    order={[1,1,1,1,1]}
                    size={[12,12,6,4,4]}
                />
                <Col
                xs={{size: 12, order: 3}}
                sm={{size: 12, order: 3}}
                md={{size: 12, order: 3}}
                lg={{size: 4, order: 2}}
                xl={{size: 4, order: 2}}>
                    <Map
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3IskLAMTSyDaQxY0h-vl4OZq9Z2f65iY&v=3.exp&libraries=geometry,drawing,places"
                        loadingElement={(<div style={{ height: `100%` }} />)}
                        containerElement={<div style={{ height: `300px`, margin: 'auto' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        />
                </Col>
                <FooterItem 
                    key={data.edges[1].node.id}
                    title={data.edges[1].node.nom}
                    description={data.edges[1].node.information}
                    order={[2,2,2,3,3]}
                    size={[12,12,6,4,4]}
                />
            </Row>
            <Row className="text-center bg-light">
                <p className="py-3 my-0 mx-auto text-secondary">Recovery Garment Center. All Rights Reserved 2019.</p>
            </Row>
        </Container>
    );
};

export default Footer;