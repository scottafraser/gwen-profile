import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Card = ({ title, cardImage }) => (
  <div
    className="title-card"
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
    <h3
      className="card-title"
      style={{
        color: `white`,
        textDecoration: `none`,
        textShadow: '2px 2px black',
        // border: 'white solid',
        // backgroundColor: 'white',
      }}
    >
      {title}
    </h3>
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
