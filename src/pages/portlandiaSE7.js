import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const PortlandiaS7 = props => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo-stack">
        <h1>Season 7</h1>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default PortlandiaS7

export const season7Image = graphql`
  fragment season7Image on File {
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
      ...season7Image
    }
    imageTwo: file(
      relativePath: { eq: "Graphics/PortlandiaS7/AcquaintanceFair.jpg" }
    ) {
      ...season7Image
    }
    imageThree: file(
      relativePath: { eq: "Graphics/PortlandiaS7/Parking.jpg" }
    ) {
      ...season7Image
    }
    imageFour: file(relativePath: { eq: "Graphics/PortlandiaS7/train.jpg" }) {
      ...season7Image
    }
  }
`
