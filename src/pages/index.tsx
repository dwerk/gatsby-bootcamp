import React from "react"
import Layout from "../components/global/layout/layout"
import Seo from "../components/global/seo"
import Home from "../components/home/Home"

const HomePage:React.FC = () => (
    <>
    <Seo title="Home"/>
    <Layout>
      <Home/>
    </Layout>
    </>
  )

export default HomePage