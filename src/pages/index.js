import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"

import Layout from "../components/layout"

const Index = () => (
  <Layout>
    <SEO title="Home"/>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Crimson+Text&display=swap');
    </style> 
    <h1>Hi, I'm Jorge!</h1>
    <p>I'm a Software Engineer working for Groupon. I'm living in San Francisco, CA and originally I'm from Santiago, Chile.</p>
    <p>Currently I do JavaScript, HTML/CSS and all UI related things.</p>
    <p>I volunteer as a mentor for <a href="https://nodeschool.io/sanfrancisco/">NodeSchool San Francisco</a>.</p>
    <p>I like non-fiction reading, film photography and playing guitar.</p>
    <p>You can find me on <a target="_BLANK" rel="noopener noreferrer" href="https://www.linkedin.com/in/jorgevenegas/">LinkedIn</a>, <a rel="noopener noreferrer" target="_BLANK" href="https://twitter.com/jorgepvenegas">Twitter</a>, <a rel="noopener noreferrer" target="_BLANK" href="https://github.com/jorgepvenegas">Github</a>, <a target="_BLANK" rel="noopener noreferrer" href="https://www.goodreads.com/user/show/7860083-jorge">Goodreads</a> <s>and <a target="_BLANK" rel="noopener noreferrer" href="https://www.instagram.com/jorgepvenegas">Instagram</a></s>. An <a rel="noopener noreferrer" target="_BLANK" href="mailto:jorgepvenegas@gmail.com">email</a> is always an option!</p>
  </Layout>
)

export default Index
