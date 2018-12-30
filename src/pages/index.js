import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
      }}
    >
      <Link
        to="/graphics/"
        style={{
          color: `black`,
          border: 'solid black',
          height: '400px',
          width: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px',
        }}
      >
        <h1 className="indexButtons">Graphics</h1>
      </Link>
      <Link
        to="/set-dressing/"
        style={{
          color: `white`,
          background: 'black',
          border: 'solid black',
          height: '400px',
          width: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '10px',
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
