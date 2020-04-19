import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "mocchi@2x.png" }) {
        childImageSharp {
          fixed(width: 300, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img fluid={data.logoImage.childImageSharp.fixed} />
}

export default Image
