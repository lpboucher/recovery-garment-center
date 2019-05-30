import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

const FeatureIcon = ({icon}) => {
    return (
        <div className="p-2" style={{width: '70px'}}>
            <Img fluid={icon.fluid}/>
        </div>

    );
};

export const query = graphql`
  fragment FeatureIcons on ContentfulCaracteristiqueCategorie {
    id
    nom
    icone {
        id
        fluid (maxWidth: 100) {
            ...GatsbyContentfulFluid
          }
    }
  }
`;

export default FeatureIcon;