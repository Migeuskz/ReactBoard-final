//custom hook
import { useEffect, useState } from "react";
import { getPhotos } from "../api/photosApi";
import { getAlbums } from "../api/albumsApi";
import { getUsers } from "../api/usersApi";
import type { UserPhotoCount } from './../types/charts';
import type { Album } from './../types/albums';
import type { Photo } from './../types/photos';
import type { User } from './../types/users';


export const useUserPhotosData = () => {
    const [data, setData] = useState<UserPhotoCount[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
     useEffect(() => {
    const fetchData = async () => {
      try {
        const [photos, albums, users]: [Photo[], Album[], User[]] = await Promise.all([
          getPhotos(),
          getAlbums(),
          getUsers(),
        ]);

         const countByUser: Record<number, { photos: number; albums: number }> = {};

        albums.forEach((album) => {
          const photosOfAlbum = photos.filter(
            (photo) => photo.albumId === album.id
          );

          if (!countByUser[album.userId]) {
            countByUser[album.userId] = { photos: 0, albums: 0 };
          }

          countByUser[album.userId].photos += photosOfAlbum.length;
          countByUser[album.userId].albums += 1;
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
          ([userId, { photos, albums }]) => {
            const user = users.find((u) => u.id === Number(userId));

            const randomPhotos = Math.max(0, photos - Math.floor(Math.random() * 200)); 
            const randomAlbums = Math.max(0, albums + Math.floor(Math.random() * 50)); 

            return {
              user: user ? user.name : `User ${userId}`,
              photos: randomPhotos,
              albums: randomAlbums,
            };
          }
        );
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