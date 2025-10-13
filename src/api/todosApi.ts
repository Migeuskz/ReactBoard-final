import type { ToDo } from "../types/todos";

export const getToDos = async (): Promise<ToDo[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(!res.ok) throw new Error("Error al obtener los ToDos");
    return res.json();
}