import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const schmidts = props => (
  <Layout>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="photo-stack">
        <h1>Schmidt's</h1>
        <Img fluid={props.data.image1.childImageSharp.fluid} />
        <Img fluid={props.data.image2.childImageSharp.fluid} />
        <Img fluid={props.data.image3.childImageSharp.fluid} />
        <Img fluid={props.data.image4.childImageSharp.fluid} />
        <Img fluid={props.data.image5.childImageSharp.fluid} />
        <Img fluid={props.data.image6.childImageSharp.fluid} />
        <Img fluid={props.data.image7.childImageSharp.fluid} />
        <Img fluid={props.data.image8.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default schmidts

export const SchmidtsImg = graphql`
  fragment SchmidtsImg on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "SetDresser/Schmidt_s/1.png" }) {
      ...SchmidtsImg
    }
    image2: file(relativePath: { eq: "SetDresser/Schmidt_s/2.png" }) {
      ...SchmidtsImg
    }
    image3: file(relativePath: { eq: "SetDresser/Schmidt_s/3.png" }) {
      ...SchmidtsImg
    }
    image4: file(relativePath: { eq: "SetDresser/Schmidt_s/4.png" }) {
      ...SchmidtsImg
    }
    image5: file(relativePath: { eq: "SetDresser/Schmidt_s/5.png" }) {
      ...SchmidtsImg
    }
    image6: file(relativePath: { eq: "SetDresser/Schmidt_s/6.png" }) {
      ...SchmidtsImg
    }
    image7: file(relativePath: { eq: "SetDresser/Schmidt_s/7.png" }) {
      ...SchmidtsImg
    }
    image8: file(relativePath: { eq: "SetDresser/Schmidt_s/8.png" }) {
      ...SchmidtsImg
    }
  }
`
