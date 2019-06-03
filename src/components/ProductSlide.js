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
        this.toggleOrder = this.toggleOrder.bind(this);
        this.toggleMeasure = this.toggleMeasure.bind(this);
        this.state = { collapseVideo: false, collapseFeatures: false, collapseOrder: false, collapseMeasure: false };
    }

    //need to refactor into single multi-purpose function
    toggleVideo() {
        this.setState(state => ({ collapseVideo: !state.collapseVideo }));
    }
    
    toggleFeatures() {
        this.setState(state => ({ collapseFeatures: !state.collapseFeatures }));
    }

    toggleOrder() {
        this.setState(state => ({ collapseOrder: !state.collapseOrder }));
    }

    toggleMeasure() {
        this.setState(state => ({ collapseMeasure: !state.collapseMeasure }));
    }


    render() {
    const { nom, caracteristiques, image } = this.props.item;
    const caracToShow = caracteristiques.slice(0,6);
    const caracToToggle = caracteristiques.slice(6);
        return (
            <div className="p-5" id="hands">
                <Container fluid className="text-center p-5 bg-white">
                    <Row>
                        <Col className="d-flex flex-column" style={{minHeight: '540px'}}>
                            <h3 className="mb-4">{nom}</h3>
                            <BackgroundImage className="flex-grow-1" fluid={image.fluid} />
                        </Col>
                        <Col className="d-flex flex-column">
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
                                            {this.state.collapseFeatures ? '-' : '+'}
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
                            <div className="flex-grow-1  my-2 d-flex justify-content-start align-items-end">
                                <Button style={{backgroundColor: '#0074B4', borderColor: '#0074B4'}} className="rounded-0 px-3 mx-1" onClick={this.toggleVideo}>Measurement video</Button>
                                <Button style={{backgroundColor: '#4A4A4A', borderColor: '#4A4A4A'}} className="rounded-0 px-3 mx-1" onClick={this.toggleMeasure}>Measurement form</Button>
                                <Button style={{backgroundColor: '#2A3849', borderColor: '#2A3849'}} className="rounded-0 px-3 mx-1" onClick={this.toggleOrder}>Order form</Button>
                            </div>
                        </Col>
                    </Row>
                    <Collapse isOpen={this.state.collapseVideo}>
                        <Container fluid className="pt-5">
                            <iframe width="650" height="486" src={this.props.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Container>
                    </Collapse>
                    <Collapse isOpen={this.state.collapseOrder}>
                        <Container fluid className="pt-5">
                            <p>Order</p>
                        </Container>
                    </Collapse>
                    <Collapse isOpen={this.state.collapseMeasure}>
                        <Container fluid className="pt-5">
                            <p>Measure</p>
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
        fluid(maxWidth: 650) {
          ...GatsbyContentfulFluid
        }
    }
    caracteristiques {
        ...FeaturesItems
    }
  }
`;

export default ProductSlide;