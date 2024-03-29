
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


export default function NewPostPage() {
  
  async function handleSavePost(formData) {
    "use server"
    
    const title = formData.get("title")
    const content = formData.get("content")
    
    await sql `INSERT INTO posts (title, content) VALUES (${title}, ${content})`
    
    revalidatePath("/posts")
    redirect("/posts")
  }
  
  return (
    <div>
    <h1 className="title">Add a new post</h1>
    <form action={handleSavePost} className="form">
      <label htmlFor="title" className="label"></label>
      <input id="title" name="title" type="text" className="input" placeholder="Post title" required/>
      <label htmlFor="content" className="label"></label>
      <input id="content" name="content" type="text" className="input" placeholder="Post content" required/>
      <button type="submit" className="button">Add Post</button>
      <Link className = "button" href="/posts">Back to Posts</Link>
    </form>
    </div>
  )
}

