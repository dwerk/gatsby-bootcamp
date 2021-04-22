import { Link } from "gatsby"
import React from "react"

export interface BlogPost {
  blogPost: {
    edges: {
      node: {
        slug: string
        title: string
        publishedDate: string
      }
    }[]
  }
}

const Posts: React.FC<BlogPost> = ({ blogPost }: BlogPost) => {
  return (
    <>
      <h1>Blog</h1>
      <ol className="posts">
        {blogPost.edges.map(({ node }) => {
          return (
            <div key={node.slug} className="post">
              <Link to={`/blog/${node.slug}`}>
                <h2 className="post">{node.title}</h2>
                <p>{node.publishedDate}</p>
              </Link>
            </div>
          )
        })}
      </ol>
    </>
  )
}

export default Posts
