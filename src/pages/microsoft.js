import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const microsoft = props => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo-stack">
        <h3>Microsoft</h3>
        <Img fluid={props.data.image1.childImageSharp.fluid} />
        <Img fluid={props.data.image2.childImageSharp.fluid} />
        <Img fluid={props.data.image3.childImageSharp.fluid} />
        <Img fluid={props.data.image4.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default microsoft

export const MicrosoftImg = graphql`
  fragment MicrosoftImg on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "SetDresser/Microsoft/2.png" }) {
      ...MicrosoftImg
    }
    image2: file(relativePath: { eq: "SetDresser/Microsoft/3.png" }) {
      ...MicrosoftImg
    }
    image3: file(relativePath: { eq: "SetDresser/Microsoft/4.png" }) {
      ...MicrosoftImg
    }
    image4: file(relativePath: { eq: "SetDresser/Microsoft/bike.png" }) {
      ...MicrosoftImg
    }
  }
`
