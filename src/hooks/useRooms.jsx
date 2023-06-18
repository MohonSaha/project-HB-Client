import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useRooms = () => {
    const { user, loading } = useAuth();

    const { data: rooms = [], refetch } = useQuery({
        queryKey: ['rooms', user?.email],

        enabled: !loading && !!user?.email,

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/rooms/owner?ownerEmail=${user?.email}`)
            console.log('is userooms response', res)
            return res.json()
            
        },      
    })
    return [rooms, refetch] 
};

export default useRooms;