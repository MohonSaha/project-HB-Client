import { Link } from "react-router-dom";
import useBooking from "../../../../hooks/useBooking";
import { FaMoneyCheckAlt, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const MyBookings = () => {

    const [bookedRoom, refetch] = useBooking();
    console.log(bookedRoom);



    // delete operation 
    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/booked/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }




    return (
        <div>
            <div className="overflow-x-auto w-full rounded-lg border-[#33525f] border-2 md:-mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#33525f] text-white text-base">
                        <tr>
                            <th>#</th>
                            <th>Hotel</th>
                            <th>Room</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody className="text-base font-semibold">
                        {
                            bookedRoom.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className=" flex-col items-center">
                                        <div className="avatar">
                                            <div className="rounded-lg w-28 h-16">
                                                <img className="w-28 h-16" src={item.hotelImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <p>{item.hotelName}</p>
                                    </div>
                                </td>


                                <td>
                                    <div className=" flex-col items-center">
                                        <div className="avatar">
                                            <div className="rounded-lg w-28 h-16">
                                                <img className="w-28 h-16" src={item.roomImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <p>{item.type}</p>
                                    </div>
                                </td>

                                <td className="text-right font-bold text-lg">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-square hover:text-white hover:bg-[#0C4B65] bg-[#0C4B65] btn-circle text-white hover:transform hover:scale-110"><FaTrash></FaTrash></button>

                                </td>
                                <td>
                                    <Link state={{ state: item }} to={`/dashboard/myhotels/addRoom`}> <button className="btn btn-square hover:text-white hover:bg-[#0C4B65] bg-[#0C4B65] btn-circle text-white hover:transform hover:scale-110"><FaMoneyCheckAlt></FaMoneyCheckAlt></button>
                                    </Link>
                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookings;