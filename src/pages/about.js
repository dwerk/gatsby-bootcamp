import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <div>
          <Layout>
            <h1>About Me</h1>
            <p>This is my bio. I tell a little bit about myself here</p>
            <p><Link to="/contact">Want to work with me? Reach out!</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage