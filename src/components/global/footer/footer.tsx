import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import "./footer.css"

const Footer:React.FC = () => {
    const data: any = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }`)

    return (
        <footer className="footer">
        <p>Created by {data.site.siteMetadata.author}, © {new Date().getFullYear()} </p>
        </footer>
    )
}

export default Footer