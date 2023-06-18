import { useQuery } from "@tanstack/react-query";
import HotelCard from "./HotelCard";


const Hotels = () => {

    const { data: hotels=[]} = useQuery({
        queryKey: ['hotels'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/hotels`)
            console.log('is owner response', res)
            return res.json()
        }
    })

    console.log(hotels);


    return (
        <div className="max-w-[1230px] mx-auto">
            <h2 className="text-center my-10 text-5xl">Hotels Section</h2>

            <div className="grid grid-cols-3 gap-10">
                {
                    hotels.map(hotel => <HotelCard key={hotel._id} hotel={hotel}></HotelCard>)
                }
            </div>

        </div>
    );
};

export default Hotels;