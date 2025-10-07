import type { Photo } from "../types/photos";

export const getPhotos = async (): Promise<Photo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  if (!res.ok) throw new Error("Error al obtener las fotos");
  return res.json();
};