import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Image from './image'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      // display: 'flex',
      // justifyContent: 'center',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 300,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <Image />
        </Link>
      </h1>
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
