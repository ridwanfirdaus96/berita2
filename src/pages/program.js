import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <h1>Program {data.site.siteMetadata.title}</h1>
    <p>
      <a href='mailto:me@example.com'>va.rhenka@gmail.com</a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
