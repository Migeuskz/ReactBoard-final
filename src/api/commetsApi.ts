import type { Comment } from "../types/comments";

export const getCommets = async (): Promise<Comment[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    if(!res.ok) throw new Error("Error al obtener los comentarios");
    return res.json();
}