import { Link } from 'gatsby'
import React from 'react'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <a
          target="BLANK"
          href="https://github.com/jorgepvenegas/website/raw/master/public/Jorge%20Venegas%20-%20Resume.pdf">
          Resume
        </a>
      </li>
    </ul>
  </header>
)

export default Header
