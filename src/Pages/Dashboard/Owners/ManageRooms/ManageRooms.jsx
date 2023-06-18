import { Link } from "react-router-dom";
import useRooms from "../../../../hooks/useRooms";
import { FaEdit, FaPlus } from "react-icons/fa";


const ManageRooms = () => {

    const [rooms] = useRooms();
    console.log(rooms);

    return (
        <div>






            <div className="overflow-x-auto w-full rounded-lg border-[#33525f] border-2 md:-mt-8">
                <table className="table">
                    {/* head */}
                    <thead className="bg-[#33525f] text-white text-base">
                        <tr>
                            <th>#</th>
                            <th>Hotel Name</th>
                            <th>Room Image</th>
                            <th>Room Type</th>
                            <th>Price</th>
                            <th>Owner</th>
                            <th>Update</th>

                        </tr>
                    </thead>
                    <tbody className="text-base font-semibold">
                        {
                            rooms.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.hotelName}</td>
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
                                <td>{item.type}</td>
                                <td className="text-right font-bold">${item.price}</td>
                                <td>{item.ownerEmail}</td>
                                <td>
                                    {/* <Link state={{ state: item }} to={`/dashboard/myClasses/update`}> */}
                                    <button onClick={() => window.my_modal_3.showModal(item)} className="btn btn-square hover:text-white hover:bg-[#0C4B65] bg-[#0C4B65] btn-circle text-white hover:transform hover:scale-110"><FaEdit></FaEdit></button>
                                    {/* </Link> */}

                                </td>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>


            {/* <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{item.type}</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                </form>
            </dialog> */}

        </div>
    );
};

export default ManageRooms;