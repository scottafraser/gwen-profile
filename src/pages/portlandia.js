import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = props => (
  <Layout>
    <h1>Graphics from Portlandia Season 7 & 8</h1>
    <Link to="/page-2/">Go to page 2</Link>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    {/* <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
    <Img fluid={props.data.imageThree.childImageSharp.fluid} /> */}
  </Layout>
)

export default IndexPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(
      relativePath: { eq: "Graphics/PortlandiaS7/BikeProtest.jpg" }
    ) {
      ...fluidImage
    }
  }
`
