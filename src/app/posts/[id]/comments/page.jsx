// pages/AddCommentPage.js
import { sql } from '@vercel/postgres';
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import styles from '@/app/globals.css';

export default function NewCommentPage({ params }) {
  
  async function handleSaveComment(event) {
    "use server"
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const comment = formData.get('comment');
    
    try {
      await sql`
        INSERT INTO comments (post_id, comment_text)
        VALUES (${params.id}, ${comment})
      `;
      alert('Comment added successfully!');
      // Redirect to the post details page or any other page as needed
      window.location.href = `/posts/${params.id}`;
    } catch (error) {
      console.error('Error adding comment:', error);
      alert('Failed to add comment. Please try again.');
    }
  }
  
  return (
    <div>
      <h1>Add Comment</h1>
      <form onSubmit={handleSaveComment}>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea id="comment" name="comment" required />
        </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}