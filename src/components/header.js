import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './image'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      // marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        width: 200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Image />
      </Link>
    </div>
    <div className="nav-links">
      <Link to="/graphics">Graphics</Link>
      <Link to="/set-dressing">Set Dressing</Link>
      <Link to="/about">About</Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
