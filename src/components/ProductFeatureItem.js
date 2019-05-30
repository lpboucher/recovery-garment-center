import React from 'react';
import { graphql } from 'gatsby';

import FeatureIcon from './FeatureIcon';

const ProductFeatureItem = ({nom, categorie}) => {
    return (
        <div className="w-100 d-flex justify-content-start align-items-center">
            <FeatureIcon icon={categorie.icone}/>
            <p className="text-left m-0">{nom}</p>   
        </div>
    );
};

export const query = graphql`
  fragment FeaturesItems on ContentfulCarateristique {
    id
    nom
    categorie {
        ...FeatureIcons
    }
  }
`;

export default ProductFeatureItem;