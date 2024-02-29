import Link from "next/link"
import { sql } from "@vercel/postgres";


export default async function PostPage({ params }) {
  // Fetch post and comments from the database
  const result = await sql.query(`
    SELECT posts.*, comments.comment_text
    FROM posts
    LEFT JOIN comments ON posts.post_id = comments.post_id
    WHERE posts.post_id = ${params.id}
  `);
  
  // Extract post data from the result
  const post = result.rows[0];

  return (
    <div className="container">
      
      {post ? (
        <>
          <h1>Post {post.post_id}</h1>
          <h2 className="title">{post.title}</h2>
          <p className="content">{post.content}</p>
     
          {result.rows.map(comment => (
            <p key={comment.comment_id} className="comment">{comment.comment_text}</p> 
          ))}
          <Link href="/posts" className="link">Back to posts</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}