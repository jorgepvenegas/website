import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <ul className="posts">
        {edges.map(({ node }) => {
          const { frontmatter } = node
          return (
            <li key={frontmatter.path}>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
              <br />
              <small>{frontmatter.date}</small>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  query ArticlesQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "MMM Do, yyyy")
            excerpt
          }
        }
      }
    }
  }
`

export default BlogPage
