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
        <h3>Life After First Failure</h3>
        <Img fluid={props.data.image1.childImageSharp.fluid} />
        <Img fluid={props.data.image2.childImageSharp.fluid} />
        <Img fluid={props.data.image3.childImageSharp.fluid} />
        <Img fluid={props.data.image4.childImageSharp.fluid} />
        <Img fluid={props.data.image5.childImageSharp.fluid} />
        <Img fluid={props.data.image6.childImageSharp.fluid} />
        <Img fluid={props.data.image7.childImageSharp.fluid} />
        <Img fluid={props.data.image8.childImageSharp.fluid} />
        <Img fluid={props.data.image9.childImageSharp.fluid} />
        <Img fluid={props.data.image10.childImageSharp.fluid} />
        <Img fluid={props.data.image11.childImageSharp.fluid} />
        <Img fluid={props.data.image12.childImageSharp.fluid} />
        <Img fluid={props.data.image13.childImageSharp.fluid} />
        {/* <Img fluid={props.data.image14.childImageSharp.fluid} /> */}
        <Img fluid={props.data.image15.childImageSharp.fluid} />
        <Img fluid={props.data.image16.childImageSharp.fluid} />
        <Img fluid={props.data.image17.childImageSharp.fluid} />
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
    image1: file(relativePath: { eq: "Graphics/LAFF/Blog.jpg" }) {
      ...laffImg
    }
    image2: file(relativePath: { eq: "Graphics/LAFF/BlueStar.jpg" }) {
      ...laffImg
    }
    image3: file(relativePath: { eq: "Graphics/LAFF/Check.jpg" }) {
      ...laffImg
    }
    image4: file(relativePath: { eq: "Graphics/LAFF/ChinaDragon.jpg" }) {
      ...laffImg
    }
    image5: file(relativePath: { eq: "Graphics/LAFF/ChinaDragon2.jpg" }) {
      ...laffImg
    }
    image6: file(relativePath: { eq: "Graphics/LAFF/ChinaDragon3.jpg" }) {
      ...laffImg
    }
    image7: file(relativePath: { eq: "Graphics/LAFF/ChurchSign.jpg" }) {
      ...laffImg
    }
    image8: file(relativePath: { eq: "Graphics/LAFF/Cookbook1.jpg" }) {
      ...laffImg
    }
    image9: file(relativePath: { eq: "Graphics/LAFF/Cookbook2.jpg" }) {
      ...laffImg
    }
    image10: file(relativePath: { eq: "Graphics/LAFF/Dayton.jpg" }) {
      ...laffImg
    }
    image11: file(relativePath: { eq: "Graphics/LAFF/FoxyLady.jpg" }) {
      ...laffImg
    }
    image12: file(relativePath: { eq: "Graphics/LAFF/Gazette1.jpg" }) {
      ...laffImg
    }
    image13: file(relativePath: { eq: "Graphics/LAFF/Gazette2.jpg" }) {
      ...laffImg
    }
    image14: file(relativePath: { eq: "Graphics/LAFF/Poster.jpg" }) {
      ...laffImg
    }
    image15: file(relativePath: { eq: "Graphics/LAFF/Resume.jpg" }) {
      ...laffImg
    }
    image16: file(relativePath: { eq: "Graphics/LAFF/Wongs.jpg" }) {
      ...laffImg
    }
    image17: file(relativePath: { eq: "Graphics/LAFF/Wongs1.jpg" }) {
      ...laffImg
    }
  }
`
