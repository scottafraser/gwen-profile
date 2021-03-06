import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Microsoft from '../images/SetDresser/Microsoft/bike.png'
import Schmidt_s from '../images/SetDresser/Schmidt_s/8.png'
import tlogc from '../images/SetDresser/TLOGC/bar.png'
import Card from '../components/card.js'

const setDresser = () => (
  <Layout>
    <SEO title="Set Dressing" />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1>Set Dressing</h1>
        <Link
          to="/microsoft"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={Microsoft} title="Microsoft" />
        </Link>
        <Link
          to="/schmidts"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={Schmidt_s} title="Schmidt's" />
        </Link>
        {/* <Link
          to="/tlogc"
          style={{
            textDecoration: 'none',
          }}
        >
          <Card cardImage={tlogc} title="TLOGC" />
        </Link> */}
      </div>
    </div>
  </Layout>
)

export default setDresser
