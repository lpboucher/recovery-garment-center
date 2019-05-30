import React from 'react';
import { graphql } from 'gatsby';


import Layout from '../components/layout';

const IndexPage = ({ data, location }) => (
    <Layout data={data} location={location} />
);

export const query = graphql`
  query SiteMain($locale: String!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    header: contentfulHeader(node_locale: { eq: $locale }) {
      ...HeaderItems
    }
    jumbo: contentfulJumbotron(node_locale: { eq: $locale }) {
      ...JumboItem
    }
    info: allContentfulGenerale(filter: {node_locale: { eq: $locale } }) {
        edges {
            node {
                ...InfoItems
            }
        }
    }
    bodyParts: allContentfulPartieDuCorps(
      filter: {node_locale: { eq: $locale }}
      sort: {fields:[ordre]})
      {
      edges {
        node {
          ...BodyItems
        }
      }
    }
    products: allContentfulProduit(filter: {node_locale: { eq: $locale } }) {
      edges {
        node {
          ...ProductItems
        }
      }
    }
    categories: allContentfulCaracteristiqueCategorie {
      edges {
        node {
          ...FeatureIcons
        }
      }
    }
    footer: allContentfulFooter(filter: {node_locale: { eq: $locale } }) {
        edges {
            node {
                ...FooterItems
            }
        }
      }
  }
`;
export default IndexPage;
