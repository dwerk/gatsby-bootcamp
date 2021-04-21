import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

import {navItem, header, title, navList, activeNavItem} from "./header.module.scss"



const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
              siteMetadata {
                title
              }
            }
          }`)

    return  (<header className={header}>
        <Link className={title} to= "/">{data.site.siteMetadata.title}</Link>
    <ul className= {navList}>
    <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/"> Home</Link>
        </li>
        <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/blog">Blog</Link>
        </li>
        <li>
            <Link  className={navItem} activeClassName={activeNavItem} to="/about"> About</Link>
        </li>
        <li>
            <Link className={navItem} activeClassName={activeNavItem} to="/contact">Contact</Link>
        </li>
    </ul>
</header>)

}

export default Header