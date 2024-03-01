import Link from "next/link"
import { sql } from "@vercel/postgres"

export default async function Categories() {
  
  const categories = await sql`
    SELECT *
    FROM categories
  `;

  return (
    <div className="container">
      <h1 className="title">Categories</h1>
      <ul className= "postList">
        {categories.rows.map((category) => (
          <div key={category.category_id} className="postItem">
            <h2 className="postTitle">{category.category}</h2>
            <Link  className="button"  href={`/categories/${category.category_id}`}>View Posts</Link>
          </div>
        ))}
      </ul>
      <Link className="button" href="/categories/addcategory">Add a category</Link>
    </div>
  );
}
