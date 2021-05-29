import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Jorge!</h1>
    <p>
      I'm doing Software Engineering at <a target="_BLANK" rel="noopener noreferrer" href="https://www.upstart.com" >Upstart</a>. Currently based in San Francisco, CA and originally I'm from Santiago, Chile.
    </p>
    <p>
      I volunteer as a mentor for{' '}
      <a href="https://nodeschool.io/sanfrancisco/">NodeSchool San Francisco</a>
      .
    </p>
    <p>Guitar, nonfiction, and film photography enthusiast.</p>
    <p>
      You can find me on{' '}
      <a
        target="_BLANK"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jorgevenegas/">
        LinkedIn
      </a>
      ,{' '}
      <a
        rel="noopener noreferrer"
        target="_BLANK"
        href="https://twitter.com/jorgepvenegas">
        Twitter
      </a>
      ,{' '}
      <a
        rel="noopener noreferrer"
        target="_BLANK"
        href="https://github.com/jorgepvenegas">
        Github
      </a>{' '}
      and{' '}
      <a
        target="_BLANK"
        rel="noopener noreferrer"
        href="https://www.goodreads.com/user/show/7860083-jorge">
        Goodreads
      </a>
      .
    </p>
  </Layout>
)

export default Index
