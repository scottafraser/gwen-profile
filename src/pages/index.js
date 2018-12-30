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
      <div
        className="index-squares"
        style={
          {
            // height: '80%',
            // width: '80%',
          }
        }
      >
        <Link
          to="/graphics/"
          style={{
            color: `black`,
            border: 'solid black',
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '10px',
          }}
        >
          <h1 className="indexButtons">Set Dressing</h1>
        </Link>
      </div>
    </div>
    <br />
    <p>Graphics, Art and Design.</p>
  </Layout>
)

export default IndexPage
