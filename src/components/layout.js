import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className="layout"
          style={{
            height: '100px',
            margin: `0 auto`,
            maxWidth: '100%',
            paddingTop: 0,
            textAlign: 'center',
          }}
        >
          {children}
          <footer>
            <div
              className="footer-links"
              style={{
                marginTop: '100px',
                marginBottom: '10px',
                fontSize: 'small',
              }}
            >
              <a href="tel:1-503-421-4508">Phone: 503.421.4508</a>
              &nbsp; // &nbsp;
              <a href="mailto: gwen.damon@gmail.com">
                Email: gwen.damon@gmail.com
              </a>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
