import { useEffect, useState } from "react";
import { getPosts } from "../api/postsApi";
import type { Posts } from "../types/posts";


export const usePostData = () => {
    const [data, setData] = useState<Posts[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() =>{
        async function fetchData(){
            try {
                const posts = await getPosts();
                setData(posts);
                setLoading(false);                
            } catch (error) {
                setError("Error al cargar los datos");
                setLoading(false);
                console.error("ocurrio un error: " + error);
            }
        };

        fetchData();
    }, []);
    
    return { data, loading, error };
}