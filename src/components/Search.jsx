import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {


    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState([]);



    const { data: searchHotel, isLoading } = useQuery({
        queryKey: ['search', searchText],

        // enabled: !loading && !!user?.email,

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/hotelSearchByRegion/${searchText}`)
            console.log('is search response', res)
            return res.json();
        }
    })

    const handleSearch = () => {
        // fetch(`http://localhost:5000/hotelSearchByRegion/${searchText}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setSearchResult(data);
        //     })

        setSearchResult(searchHotel);


    }

    console.log(searchResult);



    return (
        <div>
            <div className="h-24 mb-20 bg-white w-4/5 rounded-sm flex justify-center items-center shadow-2xl px-16 mx-auto md:-mt-12 z-20 relative">
                <div className="form-control w-full">
                    <label className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search hotel by regions" className="input border-yellow-600 w-full" />
                        <Link state={{ state: searchHotel }} to={!isLoading && '/searchHotel'}><span onClick={handleSearch} className="bg-yellow-600 h-12 text-white font-semibold">Search</span></Link>
                    </label>
                </div>
            </div>

        </div>
    );
};


export default Search;