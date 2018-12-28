import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Card = ({ title, cardImage }) => (
  <div
    style={{
      backgroundImage: 'url(' + cardImage + ')',
      backgroundSize: '100% 100%',
      height: '400px',
      width: '700px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2rem',
    }}
  >
    <h1
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {title}
    </h1>
  </div>
)

Card.propTypes = {
  siteTitle: PropTypes.string,
  cardImage: PropTypes.string,
}

Card.defaultProps = {
  siteTitle: ``,
}

export default Card
