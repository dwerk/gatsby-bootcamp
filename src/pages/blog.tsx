import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/global/layout/layout"
import Seo from "../components/global/seo"
import Posts from "../components/posts/posts"

import "./blog.css"

const BlogPage: React.FC = () => {
  const { blogPosts } = useStaticQuery(graphql`
    query {
      blogPosts: allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <>
      <Seo title="Blog" />
      <Layout>
        <Posts blogPost={blogPosts} />
      </Layout>
    </>
  )
}

export default BlogPage
