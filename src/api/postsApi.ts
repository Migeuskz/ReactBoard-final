import type { Posts } from "../types/posts";

export const getPosts = async () : Promise<Posts[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    if(!res.ok) throw new Error("Error al obtner los posts");
    return res.json();
}