import React, { useState } from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

const CharacterData = () => {
  const [data, setData] = useState('')

  const handleClick = async () => {
    const response = await fetch('/.netlify/functions/swapi')
    const data = await response.json()
    setData(data)
  }

  return (
    <>
      <h3>Here is the output</h3>
      <button onClick={handleClick}>Fetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi, I'm Jorge!</h1>
    <p>
      I'm a Senior Software Engineer at{' '}
      <a
        target="_BLANK"
        rel="noopener noreferrer"
        href="https://www.upstart.com">
        Upstart
      </a>
      . Currently based in San Francisco, CA and originally I'm from Santiago,
      Chile.
    </p>
    <p>Guitar, nonfiction, and photography enthusiast.</p>
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
    <CharacterData />
  </Layout>
)

export default Index
