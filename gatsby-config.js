/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Hi, I’m John Ngo",
    description: "I build products at the intersection of design and engineering.",
    url: "https://smallepic.com/",
    handles: {
      email: "john@smallepic.com",
      github: "jngo",
      linkedIn: "jngo",
      twitter: "jngo",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
  ],
}
