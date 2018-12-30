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
        <h1>Portlandia // Season 7</h1>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} />
        <Img fluid={props.data.imageFive.childImageSharp.fluid} />
        <Img fluid={props.data.imageSix.childImageSharp.fluid} />
        <Img fluid={props.data.imageEight.childImageSharp.fluid} />
        <Img fluid={props.data.imageNine.childImageSharp.fluid} />
        <Img fluid={props.data.imageTen.childImageSharp.fluid} />
        <Img fluid={props.data.imageEleven.childImageSharp.fluid} />
        <Img fluid={props.data.imageTwelve.childImageSharp.fluid} />
        <Img fluid={props.data.imageThirteen.childImageSharp.fluid} />
        <Img fluid={props.data.imageFourteen.childImageSharp.fluid} />
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
      relativePath: { eq: "Graphics/PortlandiaS7/AcquaintanceFair.jpg" }
    ) {
      ...season7Image
    }
    imageTwo: file(
      relativePath: { eq: "Graphics/PortlandiaS7/AcquaintanceFair2.jpg" }
    ) {
      ...season7Image
    }
    imageThree: file(relativePath: { eq: "Graphics/PortlandiaS7/Ana1.jpg" }) {
      ...season7Image
    }
    imageFour: file(relativePath: { eq: "Graphics/PortlandiaS7/Ana2.jpg" }) {
      ...season7Image
    }
    imageFive: file(
      relativePath: { eq: "Graphics/PortlandiaS7/BikeProtest.jpg" }
    ) {
      ...season7Image
    }
    imageSix: file(relativePath: { eq: "Graphics/PortlandiaS7/Eco1.jpg" }) {
      ...season7Image
    }
    imageEight: file(relativePath: { eq: "Graphics/PortlandiaS7/mag.jpg" }) {
      ...season7Image
    }
    imageNine: file(relativePath: { eq: "Graphics/PortlandiaS7/mag2.jpg" }) {
      ...season7Image
    }
    imageTen: file(
      relativePath: { eq: "Graphics/PortlandiaS7/RuntheJewels.jpg" }
    ) {
      ...season7Image
    }
    imageEleven: file(
      relativePath: { eq: "Graphics/PortlandiaS7/RuntheJewels2.jpg" }
    ) {
      ...season7Image
    }
    imageTwelve: file(relativePath: { eq: "Graphics/PortlandiaS7/Train.jpg" }) {
      ...season7Image
    }
    imageThirteen: file(
      relativePath: { eq: "Graphics/PortlandiaS7/TrainCloseUp.jpg" }
    ) {
      ...season7Image
    }
    imageFourteen: file(
      relativePath: { eq: "Graphics/PortlandiaS7/TrainLogo.jpg" }
    ) {
      ...season7Image
    }
  }
`
