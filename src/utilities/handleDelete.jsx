'use server'

import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function handleDelete(id) {
  await sql`DELETE FROM comments WHERE post_id=${id}`
  await sql`DELETE FROM posts WHERE  post_id=${id}`
  
  revalidatePath("/posts")
  redirect("/posts")
}
