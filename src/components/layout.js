import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'

const ListLink = props => (
  <li style={{ display: 'inline-block', marginRight: '1rem' }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <header style={{ marginBotton: '1.5rem' }}>
        <Link to='/' style={{ textShadow: 'none', backgroundImage: 'none' }}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
              `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <ul style={{ listStyle: 'none', float: 'right' }}>
          <ListLink to='/program/'>Program</ListLink>
          <ListLink to='/about/'>About</ListLink>
          <ListLink to='/contact/'>Contact</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}
