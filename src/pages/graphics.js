import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image.js'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Portlandia from '../images/Graphics/PortlandiaS7/RuntheJewels.jpg'
import LAFF from '../images/Graphics/LAFF/ChinaDragon.jpg'
import AmericanVandal from '../images/Graphics/American Vandal/PoliceStatement.jpg'
import Card from '../components/card.js'

const graphics = () => (
  <Layout>
    <SEO title="Projects" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>Graphics</h1>
        <Link to="/portlandia">
          <Card cardImage={Portlandia} title="Portlandia" />
        </Link>
        <Link to="/american-vandal">
          <Card cardImage={AmericanVandal} title="American Vandal" />
        </Link>
        <Link to="/laff">
          <Card cardImage={LAFF} title="Life After First Failure" />
        </Link>
        <Link to="/misc">
          <Card cardImage={Portlandia} title="Misc" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default graphics
