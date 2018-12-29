import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const laff = props => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo-stack">
        <h1>Life After First Failure</h1>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default laff

export const laffImg = graphql`
  fragment laffImg on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "Graphics/LAFF/BlueStar.jpg" }) {
      ...laffImg
    }
    imageTwo: file(relativePath: { eq: "Graphics/LAFF/ChurchSign.jpg" }) {
      ...laffImg
    }
    imageThree: file(relativePath: { eq: "Graphics/LAFF/Wongs.jpg" }) {
      ...laffImg
    }
    imageFour: file(relativePath: { eq: "Graphics/LAFF/Uniform.jpg" }) {
      ...laffImg
    }
  }
`
