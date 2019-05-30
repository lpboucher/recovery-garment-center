const languages = require('./src/data/languages');

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Recovery Garment Center`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        //rocybtov1ozk
        spaceId: `bq2lmxap5jih`,
        //6f35edf0db39085e9b9c19bd92943e4519c77e72c852d961968665f1324bfc94
        accessToken: `jnKOqWjiZB9QLvyI8rzU8HqgaC_dNFpfN_CenfqSaTU`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
