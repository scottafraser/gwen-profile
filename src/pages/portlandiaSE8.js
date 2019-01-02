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
        <h3>Portlandia // Season 8</h3>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} />
        {/* <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
        <Img fluid={props.data.imageThree.childImageSharp.fluid} />
        <Img fluid={props.data.imageFour.childImageSharp.fluid} /> */}
        <Img fluid={props.data.image5.childImageSharp.fluid} />
        <Img fluid={props.data.image6.childImageSharp.fluid} />
        <Img fluid={props.data.image7.childImageSharp.fluid} />
        <Img fluid={props.data.image8.childImageSharp.fluid} />
        <Img fluid={props.data.image9.childImageSharp.fluid} />
        <Img fluid={props.data.image10.childImageSharp.fluid} />
        <Img fluid={props.data.image11.childImageSharp.fluid} />
        <Img fluid={props.data.image12.childImageSharp.fluid} />
        <Img fluid={props.data.image13.childImageSharp.fluid} />
        <Img fluid={props.data.image14.childImageSharp.fluid} />
        <Img fluid={props.data.image15.childImageSharp.fluid} />
        <Img fluid={props.data.image16.childImageSharp.fluid} />
        <Img fluid={props.data.image17.childImageSharp.fluid} />
        <Img fluid={props.data.image18.childImageSharp.fluid} />
        <Img fluid={props.data.image19.childImageSharp.fluid} />
        <Img fluid={props.data.image20.childImageSharp.fluid} />
        <Img fluid={props.data.image21.childImageSharp.fluid} />
        <Img fluid={props.data.image22.childImageSharp.fluid} />
        <Img fluid={props.data.image23.childImageSharp.fluid} />
        <Img fluid={props.data.image24.childImageSharp.fluid} />
        <Img fluid={props.data.image25.childImageSharp.fluid} />
        {/* <Img fluid={props.data.image26.childImageSharp.fluid} /> */}
        <Img fluid={props.data.image27.childImageSharp.fluid} />
        <Img fluid={props.data.image28.childImageSharp.fluid} />
        <Img fluid={props.data.image29.childImageSharp.fluid} />
        <Img fluid={props.data.image30.childImageSharp.fluid} />
        <Img fluid={props.data.image31.childImageSharp.fluid} />
        <Img fluid={props.data.image32.childImageSharp.fluid} />
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
    # imageTwo: file(
    #   relativePath: { eq: "Graphics/PortlandiaS8/BumperSticker1.jpg" }
    # ) {
    #   ...season8Img
    # }
    # imageThree: file(
    #   relativePath: { eq: "Graphics/PortlandiaS8/BumperSticker2.jpg" }
    # ) {
    #   ...season8Img
    # }
    # imageFour: file(
    #   relativePath: { eq: "Graphics/PortlandiaS8/BumperSticker3.jpg" }
    # ) {
    #   ...season8Img
    # }
    image5: file(relativePath: { eq: "Graphics/PortlandiaS8/Canada.jpg" }) {
      ...season7Image
    }
    image6: file(relativePath: { eq: "Graphics/PortlandiaS8/CancelIt1.jpg" }) {
      ...season7Image
    }
    image7: file(relativePath: { eq: "Graphics/PortlandiaS8/CancelIt2.jpg" }) {
      ...season7Image
    }
    image8: file(relativePath: { eq: "Graphics/PortlandiaS8/DatingApp1.jpg" }) {
      ...season7Image
    }
    image9: file(relativePath: { eq: "Graphics/PortlandiaS8/DatingApp2.jpg" }) {
      ...season7Image
    }
    image10: file(
      relativePath: { eq: "Graphics/PortlandiaS8/DatingApp3.jpg" }
    ) {
      ...season7Image
    }
    image11: file(
      relativePath: { eq: "Graphics/PortlandiaS8/DisasterHut1.jpg" }
    ) {
      ...season7Image
    }
    image12: file(
      relativePath: { eq: "Graphics/PortlandiaS8/DisasterHut2.jpg" }
    ) {
      ...season7Image
    }
    image13: file(
      relativePath: { eq: "Graphics/PortlandiaS8/DisasterHut3.jpg" }
    ) {
      ...season7Image
    }
    image14: file(relativePath: { eq: "Graphics/PortlandiaS8/Fancyish.jpg" }) {
      ...season7Image
    }
    image15: file(relativePath: { eq: "Graphics/PortlandiaS8/LazyBF.jpg" }) {
      ...season7Image
    }
    image16: file(
      relativePath: { eq: "Graphics/PortlandiaS8/LocalHorizons.jpg" }
    ) {
      ...season7Image
    }
    image17: file(relativePath: { eq: "Graphics/PortlandiaS8/Magic1.jpg" }) {
      ...season7Image
    }
    image18: file(relativePath: { eq: "Graphics/PortlandiaS8/Magic2.jpg" }) {
      ...season7Image
    }
    image19: file(relativePath: { eq: "Graphics/PortlandiaS8/Magic3.jpg" }) {
      ...season7Image
    }
    image20: file(relativePath: { eq: "Graphics/PortlandiaS8/Menu.jpg" }) {
      ...season7Image
    }
    image21: file(
      relativePath: { eq: "Graphics/PortlandiaS8/PortlandMarathon1.jpg" }
    ) {
      ...season7Image
    }
    image22: file(
      relativePath: { eq: "Graphics/PortlandiaS8/PortlandMarathon2.jpg" }
    ) {
      ...season7Image
    }
    image23: file(
      relativePath: { eq: "Graphics/PortlandiaS8/PortlandTribune.jpg" }
    ) {
      ...season7Image
    }
    image24: file(relativePath: { eq: "Graphics/PortlandiaS8/PressPass.jpg" }) {
      ...season7Image
    }
    image25: file(
      relativePath: { eq: "Graphics/PortlandiaS8/RiotSpray1.jpg" }
    ) {
      ...season7Image
    }
    image26: file(
      relativePath: { eq: "Graphics/PortlandiaS8/RiotSprayPoster.jpg" }
    ) {
      ...season7Image
    }
    image27: file(relativePath: { eq: "Graphics/PortlandiaS8/RockPass.jpg" }) {
      ...season7Image
    }
    image28: file(
      relativePath: { eq: "Graphics/PortlandiaS8/RockPoster.jpg" }
    ) {
      ...season7Image
    }
    image29: file(relativePath: { eq: "Graphics/PortlandiaS8/Therapy.jpg" }) {
      ...season7Image
    }
    image30: file(
      relativePath: { eq: "Graphics/PortlandiaS8/Trampoline.jpg" }
    ) {
      ...season7Image
    }
    image31: file(
      relativePath: { eq: "Graphics/PortlandiaS8/WickerWallets.jpg" }
    ) {
      ...season7Image
    }
    image32: file(
      relativePath: { eq: "Graphics/PortlandiaS8/WomenWomen.jpg" }
    ) {
      ...season7Image
    }
  }
`
