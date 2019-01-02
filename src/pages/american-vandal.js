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
        width: '100%',
      }}
    >
      <div className="photo-stack">
        <h3>American Vandal</h3>
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
        <Img fluid={props.data.image14.childImageSharp.fluid} />
        <Img fluid={props.data.image15.childImageSharp.fluid} />
        <Img fluid={props.data.image16.childImageSharp.fluid} />
        <Img fluid={props.data.image17.childImageSharp.fluid} />
        <Img fluid={props.data.image18.childImageSharp.fluid} />
        <Img fluid={props.data.image19.childImageSharp.fluid} />
        <Img fluid={props.data.image20.childImageSharp.fluid} />
        <Img fluid={props.data.image21.childImageSharp.fluid} />
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
    image1: file(relativePath: { eq: "Graphics/AmericanVandal/24Stop.jpg" }) {
      ...VandalImg
    }
    image2: file(relativePath: { eq: "Graphics/AmericanVandal/Chairs.jpg" }) {
      ...VandalImg
    }
    image3: file(
      relativePath: { eq: "Graphics/AmericanVandal/ExtBanners.jpg" }
    ) {
      ...VandalImg
    }
    image4: file(
      relativePath: { eq: "Graphics/AmericanVandal/FacultyLounge.jpg" }
    ) {
      ...VandalImg
    }
    image5: file(
      relativePath: { eq: "Graphics/AmericanVandal/GymBanner1.jpg" }
    ) {
      ...VandalImg
    }
    image6: file(
      relativePath: { eq: "Graphics/AmericanVandal/GymBanner2.jpg" }
    ) {
      ...VandalImg
    }
    image7: file(
      relativePath: { eq: "Graphics/AmericanVandal/HorseheadCollective.jpg" }
    ) {
      ...VandalImg
    }
    image8: file(
      relativePath: { eq: "Graphics/AmericanVandal/HorseheadCollective2.jpg" }
    ) {
      ...VandalImg
    }
    image9: file(
      relativePath: { eq: "Graphics/AmericanVandal/HorseheadCollective3.jpg" }
    ) {
      ...VandalImg
    }
    image10: file(relativePath: { eq: "Graphics/AmericanVandal/ID.jpg" }) {
      ...VandalImg
    }
    image11: file(relativePath: { eq: "Graphics/AmericanVandal/ID1.jpg" }) {
      ...VandalImg
    }
    image12: file(
      relativePath: { eq: "Graphics/AmericanVandal/Laxatives1.jpg" }
    ) {
      ...VandalImg
    }
    image14: file(
      relativePath: { eq: "Graphics/AmericanVandal/Laxatives2.jpg" }
    ) {
      ...VandalImg
    }
    image15: file(
      relativePath: { eq: "Graphics/AmericanVandal/Laxatives3.jpg" }
    ) {
      ...VandalImg
    }
    image16: file(relativePath: { eq: "Graphics/AmericanVandal/Police.jpg" }) {
      ...VandalImg
    }
    image17: file(
      relativePath: { eq: "Graphics/AmericanVandal/PoliceStatement.jpg" }
    ) {
      ...VandalImg
    }
    image18: file(
      relativePath: { eq: "Graphics/AmericanVandal/Posters1.jpg" }
    ) {
      ...VandalImg
    }
    image19: file(
      relativePath: { eq: "Graphics/AmericanVandal/Posters2.jpg" }
    ) {
      ...VandalImg
    }
    image20: file(
      relativePath: { eq: "Graphics/AmericanVandal/TurdBurglarCard.jpg" }
    ) {
      ...VandalImg
    }
    image21: file(
      relativePath: { eq: "Graphics/AmericanVandal/YummySwirl.jpg" }
    ) {
      ...VandalImg
    }
  }
`
