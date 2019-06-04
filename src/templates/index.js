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
    jumbo: allContentfulJumbotron(filter: {node_locale: { eq: $locale } }) {
      edges {
        node {
          ...JumboItems
        }
    }
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
    orderForms: allContentfulFormulaireOrder(filter: {node_locale: { eq: $locale } }) {
      edges {
        node {
          region
          formulaire {
            file {
              url
            }
          }
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
