import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Masthead from "../components/masthead"
import Footer from "../components/footer"
import Style from "../components/style"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            handles {
              email
              github
              linkedIn
              twitter
            }
          }
        }
      }
    `
  )
  return (
    <>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name="title" content={data.site.siteMetadata.title} />
        <meta name="description" content={data.site.siteMetadata.description} />
        <meta property="og:title" content={data.site.siteMetadata.title} />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={data.site.siteMetadata.url} />
      </Helmet>

      <Style />

      <Masthead />

      {children}

      <Footer handles={data.site.siteMetadata.handles} />
    </>
  )
}
