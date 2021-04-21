import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import {posts,post} from './blog.module.scss'

const BlogPage = () => {
    const {blogPosts}= useStaticQuery(graphql`
    query {
       blogPosts:allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              slug
              publishedDate (formatString:"MMMM Do, YYYY")
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={posts}>
                {blogPosts.edges.map(({node}) => {
                    return (
                        <li key={node.slug} className={post}>
                            <Link to={`/blog/${node.slug}`}>
                                <h2>{node.title}</h2>
                                <p>{node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage