import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useOwner = () => {
    const {user, loading} = useAuth();

    const {data: isOwner, isLoading: isOwnerLoading} = useQuery({
        queryKey: ['isOwner', user?.email],

        enabled: !loading && !!user?.email,

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/owner/${user?.email}`)
            console.log('is owner response', res)
            return res.json();
        }
    })
    return [isOwner, isOwnerLoading]
}
export default useOwner;


