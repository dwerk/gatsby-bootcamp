import React from "react"
import Contact from "../components/contact/Contact"
import Layout from "../components/global/layout/layout"
import Seo from "../components/global/seo"

const ContactPage: React.FC = () => (
  <>
    <Seo title="Contact" />
    <Layout>
      <Contact />
    </Layout>
  </>
)
export default ContactPage
