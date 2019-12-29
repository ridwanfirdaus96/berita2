import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query MyQuery {
      allMarkdownRemark(sort: {fields: id, order: DESC}) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
`
  )
  return allMarkdownRemark.totalCount
}
