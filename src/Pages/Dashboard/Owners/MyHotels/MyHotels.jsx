import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";


const MyHotels = () => {

    const { user, loading } = useAuth();

    const { data: hotels = [], } = useQuery({
        queryKey: ['hotels', user?.email],

        enabled: !loading && !!user?.email,

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/owner?ownerEmail=${user?.email}`)
            console.log('is owner response', res)
            return res.json()
        }
    })

    console.log(hotels);


    return (
        <div>
            <div className="overflow-x-auto w-full rounded-lg border-[#33525f] border-2 md:-mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#33525f] text-white text-base">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Add Rooms</th>

                        </tr>
                    </thead>
                    <tbody className="text-base font-semibold">
                        {
                            hotels.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className=" flex-col items-center">
                                        <div className="avatar">
                                            <div className="rounded-lg w-28 h-16">
                                                <img className="w-28 h-16" src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <p></p>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <Link state={{ state: item }} to={'/'}>
                                        <button className="btn btn-square hover:text-white hover:bg-[#0C4B65] bg-[#0C4B65] btn-circle text-white hover:transform hover:scale-110"><FaEdit></FaEdit></button>
                                    </Link>

                                </td>
                                <td>
                                    <Link state={{ state: item }} to={`/dashboard/myhotels/addRoom`}> <button className="btn btn-square hover:text-white hover:bg-[#0C4B65] bg-[#0C4B65] btn-circle text-white hover:transform hover:scale-110"><FaPlus></FaPlus></button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
        // <p></p>
    );
};

export default MyHotels;