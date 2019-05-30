const _ = require(`lodash`)
const path = require(`path`)
const languages = require('./src/data/languages')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  console.log(languages);

  const locales = languages.langs;

  locales.forEach((locale) => {
    const prefix = locale;
    createPage({
      path: `/${prefix}`,
      component: path.resolve('./src/templates/index.js'),
      context: { locale },
    });
  });
}

exports.onCreateWebpackConfig = ({
  actions,
  stage,
  loaders
}) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /react-scroll-to-element/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
}
