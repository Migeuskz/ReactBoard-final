import { useEffect, useState } from "react";
import { getToDos } from "../api/todosApi";
import type { ToDo } from "../types/todos";

export const useToDosData = () => {
    const [data, setData] = useState<ToDo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const todos = await getToDos();
                setData(todos);
                setLoading(false);
            } catch (error) {
                setError("Error al cargar los datos");
                setLoading(false);
                console.error("Ocurrio un error: " + error)
            }
        };

        fetchData();
    },[]);

    return { data, loading, error };
}