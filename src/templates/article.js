import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const Article = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  const { date, excerpt } = frontmatter
  // const { markdownRemark } = data // data.markdownRemark holds your post data
  // const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          <small>{date}</small>
          <p>{excerpt}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        date
        excerpt
      }
    }
  }
`

export default Article
