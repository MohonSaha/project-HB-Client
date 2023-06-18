import { useLocation } from "react-router-dom";
import HotelCard from "../Home/Hotels/HotelCard";


const SearchHotel = () => {


    const location = useLocation();
    const searchHotel = location.state.state;


    return (
        <div className="max-w-[1230px] mx-auto mt-14">
            <div className="grid grid-cols-3 gap-10">
                {
                    searchHotel.map(hotel => <HotelCard key={hotel._id} hotel={hotel}></HotelCard>)
                }
            </div>
        </div>
    );
};

export default SearchHotel;