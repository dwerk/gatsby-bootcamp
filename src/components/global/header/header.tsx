import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import "./header.css"

const Header: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className="header">
      <Link className="title" to="/">
        {data.site.siteMetadata.title}
      </Link>
      <ul className="nav-list">
        <li>
          <Link className="nav-item" activeClassName="active-nav-item" to="/">
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/about"
          >
            {" "}
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-item"
            activeClassName="active-nav-item"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
