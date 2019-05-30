import React, { Component, Fragment } from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import ProductFeatureItem from './ProductFeatureItem';

import {
    Container,
    Row,
    Col,
    Button,
    Collapse } from 'reactstrap';

class ProductSlide extends Component {
    constructor() {
        super();
        this.toggleVideo = this.toggleVideo.bind(this);
        this.toggleFeatures = this.toggleFeatures.bind(this);
        this.state = { collapseVideo: false, collapseFeatures: false };
    }
    
    toggleVideo() {
        this.setState(state => ({ collapseVideo: !state.collapseVideo }));
    }

    toggleFeatures() {
        this.setState(state => ({ collapseFeatures: !state.collapseFeatures }));
    }

    render() {
    const { nom, caracteristiques, image } = this.props.item;
    const isOpen = this.state.collapseVideo || this.state.collapseFeatures;
    const caracToShow = caracteristiques.slice(0,6);
    const caracToToggle = caracteristiques.slice(6);
        return (
            <div className="p-5" id="hands">
                <Container fluid className="text-center p-5 bg-white">
                    <Row>
                        <Col className="d-flex flex-column">
                            <h3 className="mb-4">{nom}</h3>
                            <BackgroundImage className="flex-grow-1" fluid={image.fluid} />
                        </Col>
                        <Col>
                            {caracToShow.map(car => 
                                <Fragment key={car.id}>
                                    <ProductFeatureItem {...car} />
                                </Fragment>
                            )}
                            {caracToToggle.length > 0 ? 
                                <Fragment>
                                    <div className="text-left">
                                        <a 
                                            style={{fontSize: '250%', color: '#0074B4', cursor: 'pointer'}}
                                            className="px-4 mx-2"
                                            onClick={this.toggleFeatures}
                                        >
                                            {isOpen ? '-' : '+'}
                                        </a>
                                    </div>
                                    <Collapse isOpen={this.state.collapseFeatures}>
                                        {caracToToggle.map(car => 
                                            <Fragment key={car.id}>
                                                <ProductFeatureItem {...car} />
                                            </Fragment>
                                        )}
                                    </Collapse>
                                </Fragment>
                                : null}
                            <div className="my-2 d-flex justify-content-start align-items-center">
                                <Button style={{backgroundColor: '#0074B4', borderColor: '#0074B4'}} className="rounded-0 px-3 mx-1" onClick={this.toggleVideo}>Measurement video</Button>
                                <Button style={{backgroundColor: '#4A4A4A', borderColor: '#4A4A4A'}} className="rounded-0 px-3 mx-1">Measurement form</Button>
                                <Button style={{backgroundColor: '#2A3849', borderColor: '#2A3849'}} className="rounded-0 px-3 mx-1">Order form</Button>
                            </div>
                        </Col>
                    </Row>
                    <Collapse isOpen={this.state.collapseVideo}>
                        <Container fluid>
                            Test
                        </Container>
                    </Collapse>
                </Container>
            </div>
        );
    }
};

export const query = graphql`
  fragment ProductItems on ContentfulProduit {
    id
    nom
    image {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
    }
    caracteristiques {
        ...FeaturesItems
    }
  }
`;

export default ProductSlide;