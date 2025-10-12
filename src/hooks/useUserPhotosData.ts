//custom hook
import { useEffect, useState } from "react";
import { getPhotos } from "../api/photosApi";
import { getAlbums } from "../api/albumsApi";
import type { UserPhotoCount } from './../types/charts';
import type { Album } from './../types/albums';
import type { Photo } from './../types/photos';


export const useUserPhotosData = () => {
    const [data, setData] = useState<UserPhotoCount[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
     useEffect(() => {
    const fetchData = async () => {
      try {
        const [photos, albums]: [Photo[], Album[]] = await Promise.all([
          getPhotos(),
          getAlbums(),
        ]);

        const countByUser: Record<number, number> = {};

        albums.forEach((album) => {
          const photosOfAlbum = photos.filter(
            (photo) => photo.albumId === album.id
          );
          countByUser[album.userId] =
            (countByUser[album.userId] || 0) + photosOfAlbum.length;
            countByUser[album.userId] += 1; //agregando 1 por cada album (1 foto de portada)
        });

        //Datos reales de jsonplaceHolder
        // const chartData: UserPhotoCount[] = Object.entries(countByUser).map(
        //   ([userId, count]) => ({
        //     user: `User ${userId}`,
        //     photos: count,
        //   })
        // );

        //ejemplo de grafica dinamica
        const chartData: UserPhotoCount[] = Object.entries(countByUser).map(
          ([userId, count]) => ({
            user: `User ${userId}`,
            photos: count - Math.floor(Math.random() * 200), 
            albums: count - Math.floor(Math.random() * 50),
          })
        )

        setData(chartData);
      } catch (err) {
        console.error(err)
        setError("Error al cargar los datos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}