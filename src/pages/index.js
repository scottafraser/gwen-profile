import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
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
    <br />
    <p>Graphics, Art and Design.</p>
  </Layout>
)

export default IndexPage
