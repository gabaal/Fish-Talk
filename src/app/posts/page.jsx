import Link from "next/link"
import { sql } from "@vercel/postgres"




export default async function Posts() {
  const posts = await sql`
    SELECT posts.*, categories.name as category_name, LEFT(posts.content, 30) AS content_excerpt
    FROM Posts
    LEFT JOIN categories ON posts.category_id = categories.category_id
  `;

  return (
    <div className="container">
      <h1 className="title">Posts</h1>
      <ul className="postList">
        {posts.rows.map((post) => (
          <div key={post.post_id} className="postItem">
            <h2 className="postTitle">{post.title}</h2>
            <p className="postCategory">Category: {post.category_name}</p>
            <p className="postExcerpt">{post.content_excerpt}...</p>
            <Link href={`/posts/${post.post_id}`} className="readMore">Read More</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}