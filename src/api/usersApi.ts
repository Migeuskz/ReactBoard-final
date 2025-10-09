import type { User } from './../types/users';

export const getUsers = async () : Promise<User[]> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!res.ok) throw new Error("Error al obtner los usuarios");
    return res.json();
}