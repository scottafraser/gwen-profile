import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>I'm Gwen</h1>
    <div style={{ width: '200px' }}>
      <Image />
    </div>
    <p>Graphic and Set design for film, television and commercials.</p>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link
        to="/graphics/"
        style={{
          color: `black`,
        }}
      >
        <h1 className="indexButtons">Graphics</h1>
      </Link>
      <Link
        to="/set-dressing/"
        style={{
          color: `black`,
        }}
      >
        <h1 className="indexButtons">Set Dressing</h1>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
