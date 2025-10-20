import { useEffect, useState } from "react";
import { getToDos } from "../api/todosApi";
import { getUsers } from "../api/usersApi";
import type { ToDo } from "../types/todos";
import type { User } from './../types/users';


export const useToDosData = () => {
    const [toDos, setToDos] = useState<ToDo[]>([]);
    const [loadingToDos, setLoadingToDos] = useState<boolean>(true);
    const [errorToDos, setErrorToDos] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const [todos, users]: [ToDo[], User[]] = await Promise.all([
                    getToDos(),
                    getUsers(),
                ]);

                const toDosWithUserNames = todos.map((toDo) => {
                    const user = users.find((u) => u.id === toDo.userId);
                    return {
                        ...toDo,
                        userName: user ? user.name : `User ${toDo.userId}`,
                    };
                });

                // const todos = await getToDos();
                setToDos(toDosWithUserNames);
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