// import { useQuery } from "@tanstack/react-query";
// import useAuth from "./useAuth";


// const useBooking = () => {
//     const { user, loading } = useAuth();

//     const { data: bookedRoom = [], refetch } = useQuery({
//         queryKey: ['rooms', user?.email],

//         enabled: !loading && !!user?.email,

//         queryFn: async () => {
//             const res = await fetch(`http://localhost:5000/booked/room?email=${user?.email}`)
//             console.log('is useBooking response', res)
//             return res.json()
            
//         },      
//     })
//     return [bookedRoom, refetch] 
// };

// export default useBooking;