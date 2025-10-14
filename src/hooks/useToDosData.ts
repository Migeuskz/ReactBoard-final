import { useEffect, useState } from "react";
import { getToDos } from "../api/todosApi";
import type { ToDo } from "../types/todos";

export const useToDosData = () => {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [loadingToDos, setLoadingToDos] = useState<boolean>(true);
    const [errorToDos, setErrorToDos] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const todos = await getToDos();
                setToDos(todos);
                setLoadingToDos(false);
            } catch (error) {
                setErrorToDos("Error al cargar los datos");
                setLoadingToDos(false);
                console.error("Ocurrio un error: " + error)
            }
        };

        fetchData();
    },[]);

    return { toDos, loadingToDos, errorToDos };
}