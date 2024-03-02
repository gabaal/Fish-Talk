'use client'
import { handleDelete } from "@/utilities/handleDelete";


export default function DeleteButton({id}) {
    return <button onClick={() => handleDelete(id)}>Delete Post</button>
}