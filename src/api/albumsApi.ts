import type { Album } from "../types/albums";

export const getAlbums = async (): Promise<Album[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!res.ok) throw new Error("Error al obtener los álbumes");
    return res.json();
}