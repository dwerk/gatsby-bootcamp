import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/global/seo"

import Layout from "../components/global/layout/layout"
 //TODO:  1. remove return and {} 2. separate page and content in a separate component 3.Give all the components a type 4. Add SEO
interface Data {
  data: {
    blogPost: {
      title:string,
      publishedDate: string,
      body1: {
        childMarkdownRemark: {
            html: string
        }
      }
    }
  }
}

export const query: any = graphql`
  query($slug: String!) {
    blogPost:contentfulBlogPost(slug: { eq: $slug }) {
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

const Blog:React.FC <Data> = ({data}: Data) => {
  return (
    <>
    <Seo title={data.blogPost.title}/>
    <Layout>
      <h1>{data.blogPost.title}</h1>
     {<div dangerouslySetInnerHTML={{__html:data.blogPost.body1.childMarkdownRemark.html}}/>}
    </Layout>
  </>
  )

}


export default Blog
