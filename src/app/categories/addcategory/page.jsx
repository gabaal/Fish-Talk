
import Link from 'next/link';
import { sql } from '@vercel/postgres';
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


export default function NewCategoryPage() {
  
  async function handleSaveCategory(formData) {
    "use server"
    
    const category = formData.get("category")
    
    await sql `INSERT INTO categories (Category) VALUES (${category})`
    
    revalidatePath("/categories")
    redirect("/categories")
  }
  
  return (
    <form action={handleSaveCategory} className="form">
      <label htmlFor="category" className="label">Category</label>
      <input id="category" name="category" type="text" className="input" required/>
      <button type="submit" className="button">Add Category</button>
      <Link className = "button" href="/categories">Back to Categories</Link>
    </form>
    
  )
}

