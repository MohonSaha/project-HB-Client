import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const HotelCard = ({ hotel }) => {

    const { name, image, location, details, _id } = hotel;
    const { user } = useAuth();
    const navigate = useNavigate();

    const { data: rooms = [] } = useQuery({
        queryKey: ['rooms'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/rooms/${_id}`)
            console.log('is rooms response', res)
            return res.json()
        }
    })



    const handleReserve = (room) => {
        console.log(room);
        if (user && user.email) {
            const cartItem = { hotelId: _id, roomId: room._id, type: room.type, price: room.price, ownerEmail: room.ownerEmail, email: user.email };

            fetch('http://localhost:5000/booked', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        // refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Class Added to the cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        else {
            Swal.fire({
                title: 'Please login to enroll class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>

            {/* 
            <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <div className="space-y-10">
                        {
                            rooms.map(room => <div key={room._id}>
                                <h2 className="text-xl font-bold">{room.type}</h2>
                                <p>{room.roomDetails}</p>
                                <p>Max People: {room.people}</p>
                                <p>${room.price}</p>
                                <button onClick={() => handleReserve(room)} className="btn btn-sm mt-4 btn-primary">Reserve</button>
                            </div>)
                        }
                    </div>
                </form>
            </dialog>



            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => window.my_modal_3.showModal(_id)} className="btn btn-primary">Available Room</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;