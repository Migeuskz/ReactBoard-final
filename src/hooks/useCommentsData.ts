import { useEffect, useState } from "react";
import { getCommets } from "../api/commetsApi";
import type { Comment } from "../types/comments";

export const useCommentsData = () => {
    const [data, setData] = useState<Comment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comments = await getCommets();
                setData(comments);
                setLoading(false);
            } catch (error) {
                setError("Error al cargar los datos");
                setLoading(false);
                console.error("Ocurrio un error: " + error);
            }
        };

        fetchData();
    }, []);

    return { data,  loading, error };
}