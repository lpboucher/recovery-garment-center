const _ = require(`lodash`)
const path = require(`path`)
const languages = require('./src/data/languages')

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({ fromPath: 'https://recoverygarmentcenter.ca/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://recoverygarmentcenter.com/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://recoverygarmentcenter.net/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://recoverygarment.com/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://recoverygarment.ca/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: 'https://recovery-garment.com/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })
  createRedirect({ fromPath: ' https://recovery-garment.ca/*', toPath: 'https://recoverygarmentcentre.ca/:splat', isPermanent: true, force: true })

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
