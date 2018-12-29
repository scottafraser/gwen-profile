import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const Vandal = props => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo-stack">
        <h1>American Vandal</h1>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default Vandal

export const VandalImg = graphql`
  fragment VandalImg on File {
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
      relativePath: { eq: "Graphics/AmericanVandal/Turd Burglar Card (1).jpg" }
    ) {
      ...VandalImg
    }
    imageTwo: file(relativePath: { eq: "Graphics/AmericanVandal/Chairs.jpg" }) {
      ...VandalImg
    }
    imageThree: file(
      relativePath: { eq: "Graphics/AmericanVandal/Faculty Lounge.jpg" }
    ) {
      ...VandalImg
    }
    imageFour: file(
      relativePath: { eq: "Graphics/AmericanVandal/24 Stop.jpg" }
    ) {
      ...VandalImg
    }
  }
`
