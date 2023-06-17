import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";


const MyHotels = () => {

    const {user, loading} = useAuth();

    const {data: hotels=[], isLoading} = useQuery({
        queryKey: ['isOwner', user?.email],

        enabled: !loading && !!user?.email,

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/owner?ownerEmail=${user?.email}`)
            console.log('is owner response', res)
            return res.json()
        }
    })


    return (
        <div>
            
        </div>
    );
};

export default MyHotels;