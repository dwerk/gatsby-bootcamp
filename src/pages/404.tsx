import React from "react"
import Layout from "../components/global/layout/layout"

import Seo from "../components/global/seo"
import PageNotFound from "../components/notFoundPage/PageNotFound"

const NotFoundPage: React.FC = () => (
  <>
    <Layout>
      <Seo title="404" />
      <PageNotFound />
    </Layout>
  </>
)

export default NotFoundPage
