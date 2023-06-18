import { useQuery } from "@tanstack/react-query";


const useBooking = () => {

    const { data: allHotel = [], refetch } = useQuery({
        queryKey: ['hotels'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allHotels`)
            console.log('is useHotel response', res)
            return res.json()
            
        },      
    })
    return [allHotel, refetch] 
};

export default useBooking;