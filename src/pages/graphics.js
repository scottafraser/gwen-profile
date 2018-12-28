import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image.js'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Portlandia from '../images/Graphics/PortlandiaS7/RuntheJewels.jpg'
import Card from '../components/card.js'

const graphics = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Graphics</h1>
    <div>
      <Card cardImage={Portlandia} title="Portlandia" />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default graphics
