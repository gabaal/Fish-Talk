import Link from "next/link"
import { sql } from "@vercel/postgres"


export default async function Categories() {
  const posts = await sql`
    SELECT *
    FROM categories
  `;

  return (
    <div className="container">
      <h1 className="title">Categories</h1>
      <ul className="postList">
        {posts.rows.map((post) => (
          <div key={post.category_id} className="postItem">
            <h2 className="postTitle">{post.category}</h2>
          </div>
        ))}
      </ul>
      <Link className = "button" href="/categories/addcategory">Add a category</Link>
    </div>
  );
}