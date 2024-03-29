// pages/AddCommentPage.js
import { sql } from '@vercel/postgres';
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import Link from "next/link"

export default function NewCommentPage({ params }) {
  
  
  async function handleSaveComment(formData) {
    "use server"

    const comment = formData.get('comment');
    
      await sql`
        INSERT INTO comments (post_id, comment_text)
        VALUES (${params.id}, ${comment})
      `;
      revalidatePath(`/posts/${params.id}`)
      redirect(`/posts/${params.id}`)
  }
  
  return (
    <div>
      <h1>Add a Comment</h1>
    <form action={handleSaveComment} className="form">
      <label htmlFor="comment" className="label"></label>
      <input id="comment" name="comment" type="text" className="input" placeholder="Comment" required/>
      <button type="submit" className="button">Add Comment</button>
      <Link className="button" href={`/posts/${params.id}`}>Back to Post</Link>
    </form>
    </div>
  );
}