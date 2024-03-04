import Link from "next/link"
import { sql } from "@vercel/postgres"

export default async function Posts({ searchParams}) {
  const posts = await sql`
    SELECT posts.*, categories.category as category, LEFT(posts.content, 100) AS content_excerpt
    FROM Posts
    LEFT JOIN categories ON posts.category_id = categories.category_id
    ORDER BY LOWER (title) ASC
  `;
  if (searchParams.sort === "desc") {
    posts.rows.reverse();
  }

  return (
    <div>
      <h1 className="title">Posts</h1>
      <Link className="button" href="/posts?sort=asc">Sort ascending</Link><Link className="button" href="/posts?sort=desc">
        Sort descending
      </Link>
      <Link  className="button" href="/posts/addPost">New Post</Link>
      <ul className="postList">
        {posts.rows.map((post) => (
          <div key={post.post_id} className="postItem ">

            <h2 className="postTitle">{post.title}</h2>
            <p className="postCategory">Category: {post.category}</p>
            <p className="postExcerpt">{post.content_excerpt}...</p>
            <Link  className="button"  href={`/posts/${post.post_id}`}>Read More</Link>
          </div>
        ))}
      </ul>
    </div>
  );
}