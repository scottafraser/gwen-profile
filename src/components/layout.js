// import React from 'react'
// import { css } from '@emotion/core'
// import { StaticQuery, Link, graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'

// import { rhythm } from '../utils/typography'

// export default ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div
//         css={css`
//           margin: 0 auto;
//           max-width: 700px;
//           padding: ${rhythm(2)};
//           padding-top: ${rhythm(1.5)};
//         `}
//       >
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title>My Title</title>
//           <link rel="canonical" href="http://mysite.com/example" />
//         </Helmet>
//         <Link to={`/`}>
//           <h3
//             css={css`
//               margin-bottom: ${rhythm(2)};
//               display: inline-block;
//               font-style: normal;
//             `}
//           >
//             {data.site.siteMetadata.title}
//           </h3>
//         </Link>
//         <div
//           css={css`
//             float: right;
//           `}
//         >
//           <Link
//             to={`/about/`}
//             css={css`
//               padding: 5px;
//             `}
//           >
//             About
//           </Link>
//           <Link
//             to={`/my-files/`}
//             css={css`
//               padding: 5px;
//             `}
//           >
//             My Files
//           </Link>
//         </div>
//         {children}
//       </div>
//     )}
//   />
// )

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
          style={{
            height: '100px',
            margin: `0 auto`,
            maxWidth: '100%',
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
            textAlign: 'center',
          }}
        >
          {children}
          <footer>
            <div
              style={{
                marginTop: '200px',
              }}
            >
              © 2018, Built by Scott
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
