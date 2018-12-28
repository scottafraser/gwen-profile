import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image.js'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Microsoft from '../images/SetDresser/Microsoft/bike.png'
import Schmidt_s from '../images/SetDresser/Schmidt_s/table.png'
import tlogc from '../images/SetDresser/TLOGC/bar.png'
import Card from '../components/card.js'

const setDresser = () => (
  <Layout>
    <SEO title="Projects" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>Set Dresser</h1>
        <Link to="/microsoft">
          <Card cardImage={Microsoft} title="Microsoft" />
        </Link>
        <Link to="/american-vandal">
          <Card cardImage={Schmidt_s} title="Schmidt's" />
        </Link>
        <Link to="/tlogc">
          <Card cardImage={tlogc} title="TLOGC" />
        </Link>
      </div>
    </div>
  </Layout>
)

export default setDresser
