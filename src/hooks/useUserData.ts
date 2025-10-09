import { useEffect, useState } from "react";
import { getUsers } from "../api/usersApi";
import type { User } from './../types/users';

export const useUserData = () => {
    const [data, setData] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const users = await getUsers();
                setData(users);
                setLoading(false);                
            } catch (error) {                
                setError("Error al cargar los datos");
                setLoading(false);
                console.error("ocurrio un error: " + error);                
            }
        };
        fetchData();
    }, []);

    return { data, loading, error};
}
