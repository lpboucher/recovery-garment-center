import React from 'react';
import { graphql } from 'gatsby';

import { Col } from 'reactstrap';

const FooterItem = ({title, description, order, size}) => {
    return (
        <Col 
        xs={{size: size[0], order: order[0]}}
        sm={{size: size[1], order: order[1]}}
        md={{size: size[2], order: order[2]}}
        lg={{size: size[3], order: order[3]}}
        xl={{size: size[4], order: order[4]}}
        className="text-center text-white">
            <h5 style={{fontWeight: 'bold'}} className="mb-5 text-uppercase">{title}</h5>
            {description.content.map((item, index) =>
              <p className="mb-1" key={`${item.content[0].nodeType}-${index}`}>{item.content[0].value}</p>
            )}
        </Col>
    );
};

export const query = graphql`
  fragment FooterItems on ContentfulFooter {
    nom
    id
    information {
      content {
        content {
          value
        }
      }
    }
  }
`;

export default FooterItem;