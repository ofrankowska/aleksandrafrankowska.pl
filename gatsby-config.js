const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Aleksandra Frankowska`,
    description: `Aleksandra Frankowska - Frontend Developer Portofolio`,
    author: `Aleksandra Frankowska`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        utils: path.join(__dirname, 'src/utils'),
        templates: path.join(__dirname, 'src/templates'),
        src: path.join(__dirname, 'src/src'),
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      test: /\.js$/,
      exclude: /(node_modules|cache|public)/,
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
    {
      resolve: `gatsby-plugin-stylelint`,
      options: { files: ['**/*.js'] },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aleksandra Frankowska`,
        short_name: `aleksandrafrankowska`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/cute.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
