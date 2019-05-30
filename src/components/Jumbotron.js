import React from 'react';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import {
    Jumbotron,
    Container,
    UncontrolledCarousel } from 'reactstrap';

const Jumbo = ({data}) => {
    //const { text, cover } = data;
    const slides = data.edges.map(slide => {
        return {
            src: slide.node.cover.fluid.src,
            header: slide.node.text
        }
    })
    return (
        <div>
            {/*<Jumbotron fluid className="mb-0 p-0" style={{height: '600px'}}>
                <Container fluid className="h-100 p-0 text-center">
                    <BackgroundImage className="h-100 d-flex align-items-center" fluid={cover.fluid}>
                        <h3 className="display-4 w-75 m-auto text-white" style={{fontWeight: 'bolder', fontSize: '300%', lineHeight: '2.0'}}>{text}</h3>
                    </BackgroundImage>
                </Container>
            </Jumbotron>
    */}
            <UncontrolledCarousel autoPlay={false} interval={0} items={slides} />
        </div>
    );
};

export const query = graphql`
    fragment JumboItems on ContentfulJumbotron {
        text 
        cover {
            fluid(maxWidth: 800) {
                ...GatsbyContentfulFluid
            }
        }
    }
`;

export default Jumbo;