import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const PortlandiaS8 = props => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo-stack">
        <h1>Graphics from Portlandia Season 8</h1>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default PortlandiaS8

export const season8Img = graphql`
  fragment season8Img on File {
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
      relativePath: { eq: "Graphics/PortlandiaS8/BirthdayCards.jpg" }
    ) {
      ...season8Img
    }
    imageTwo: file(relativePath: { eq: "Graphics/PortlandiaS8/Canada.jpg" }) {
      ...season8Img
    }
    imageThree: file(
      relativePath: { eq: "Graphics/PortlandiaS8/Fancyish.jpg" }
    ) {
      ...season8Img
    }
    imageFour: file(
      relativePath: { eq: "Graphics/PortlandiaS8/LocalHorizons.jpg" }
    ) {
      ...season8Img
    }
  }
`
