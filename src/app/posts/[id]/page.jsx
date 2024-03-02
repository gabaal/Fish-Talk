
import Link from "next/link"
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import DeleteButton from "@/components/DeleteButton"
export default async function PostPage({ params }) {

  const result = await sql.query(`
    SELECT posts.*, comments.comment_text
    FROM posts
    LEFT JOIN comments ON posts.post_id = comments.post_id
    WHERE posts.post_id = ${params.id}
  `);
  

  const post = result.rows[0];

  return (
    <div className="container">
      
      {post ? (
        <>
          {/* <h1>Post</h1> */}
          <h2>{post.title}</h2>
          <p>{post.content}</p>
     
          {result.rows.map(comment => (
            <p key={comment.comment_id} className="comment">{comment.comment_text}</p> 
          ))}
          <Link className="button"  href={`/posts/${params.id}/comments`}>Add a Comment</Link>
          <Link className="button"  href="/posts">Back to posts</Link>
          <DeleteButton className ="button" id={post.post_id}/>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}