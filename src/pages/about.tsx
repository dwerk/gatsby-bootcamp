import React from "react"
import AboutMe from "../components/aboutMe/AboutMe"
import Layout from "../components/global/layout/layout"
import Seo from "../components/global/seo"

const AboutPage:React.FC = () => (
    <>
      <Seo title="About Me" />
      <Layout>
        <AboutMe />
      </Layout>
    </>
  )


export default AboutPage
