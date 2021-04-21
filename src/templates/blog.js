// @ts-check
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body1 {
        childMarkdownRemark {
          html
        }
      }
      }
    }
`

const Blog = ({data}) => {
  return (
    <Layout>
      <h1>{data.contentfulBlogPost.title}</h1>
     {<div dangerouslySetInnerHTML={{__html:data.contentfulBlogPost.body1.childMarkdownRemark.html}}/>}
    </Layout>
  )
}


export default Blog
