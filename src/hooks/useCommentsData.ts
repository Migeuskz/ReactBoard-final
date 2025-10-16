import { useEffect, useState } from "react";
import { getCommets } from "../api/commetsApi";
import type { Comment } from "../types/comments";

export const useCommentsData = () => {
    const [dataComments, setDataComments] = useState<Comment[]>([]);
    const [loadingComments, setLoadingComments] = useState<boolean>(true);
    const [errorComments, setErrorComments] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comments = await getCommets();
                setDataComments(comments);
                setLoadingComments(false);
            } catch (error) {
                setErrorComments("Error al cargar los datos");
                setLoadingComments(false);
                console.error("Ocurrio un error: " + error);
            }
        };

        fetchData();
    }, []);

    return { dataComments,  loadingComments, errorComments };
}