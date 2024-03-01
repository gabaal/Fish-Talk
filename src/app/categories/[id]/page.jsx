import Link from "next/link"
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import Categories from "../page";

export default async function CategoryPage({ params }) {
  
  const result = await sql.query(`
  SELECT posts.*, categories.category
FROM posts
LEFT JOIN categories ON categories.category_id = posts.category_id
WHERE categories.category_id = ${params.id}
  `)
  
  const post = result.rows[0]
  
  return (
    <d className="container">
      <h1>Posts for {Categories.category}</h1>
      {/* <h2 className="title">{categories.category}</h2> */}
      {result.rows.map(post => (
        <p key={post.post_id} className="comment">{post.title}</p>
      ))}
      <Link className="button"  href="/categories">Back to categories</Link>
    </d>
  )
}