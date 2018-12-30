import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Portlandia from '../images/Graphics/PortlandiaS7/RuntheJewels.jpg'
import Portlandia2 from '../images/Graphics/PortlandiaS8/CancelIt1.jpg'
import LAFF from '../images/Graphics/LAFF/ChinaDragon.jpg'
import AmericanVandal from '../images/Graphics/AmericanVandal/PoliceStatement.jpg'
import Card from '../components/card.js'

const graphics = () => (
  <Layout>
    <SEO title="Graphics" />
    <div
      classname="card-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>Graphics</h1>
        <Link
          to="/portlandiaSE7"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={Portlandia} title="Portlandia Season 7" />
        </Link>
        <Link
          to="/portlandiaSE8"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={Portlandia2} title="Portlandia Season 8" />
        </Link>
        <Link
          to="/american-vandal"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={AmericanVandal} title="American Vandal" />
        </Link>
        <Link
          to="/laff"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={LAFF} title="Life After First Failure" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default graphics
