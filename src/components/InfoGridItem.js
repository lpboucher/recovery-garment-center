import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import {
    Col,
    Card,
    CardText, 
    CardBody,
    CardTitle } from 'reactstrap';

const InfoGridItem = ({nom, description, icone}) => {
    return (
        <Col className="p-4" xs="6">
            <Card className="h-100 border-0 text-center">
                <div className="m-auto pt-2" style={{width: '100px', height: 'auto'}}>
                    <Img className="w-100" fluid={icone.fluid}/>
                </div>
                <CardBody>
                    <CardTitle className="font-weight-bold">{nom}</CardTitle>
                    <CardText className="px-5 display-5" style={{fontSize: '80%', fontWeight: 'lighter'}}>{description.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export const query = graphql`
  fragment InfoItems on ContentfulGenerale {
    id
    nom
    description {
        description
    }
    icone {
        fluid (maxWidth: 100) {
            ...GatsbyContentfulFluid
        }
    }
  }
`;

export default InfoGridItem;