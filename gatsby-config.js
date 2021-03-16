/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'some random description',
    author:'@johndoe',
    data: ['item1', 'item2', 'item3'],
    person: { name: 'Richard', age: 32 }
  },
  
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '0ub93dxirx7p',
        accessToken: 'VO3LxD2V0FZYyLEBXBA-ADi-AvI7mKZxJxjWmDqdudg',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
