
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../../../components/Modal";


const HotelCard = ({ hotel }) => {

    const { name, image, location, details, _id, region } = hotel;
    const { user } = useAuth();
    const navigate = useNavigate();



    const [showModal, setShowModal] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleOpenModal = (id) => {
        setSelectedId(id);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedId(null);
    };


    const handleReserve = (room) => {
        console.log(room);
        if (user && user.email) {
            const cartItem = { hotelId: _id, roomId: room._id, type: room.type, price: room.price, ownerEmail: room.ownerEmail, email: user.email, hotelImage: image, hotelName: name, roomImage: room.image };

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


        {/* Modal Room Data  */}
            <div>
                {showModal && (
                    <Modal handleReserve={handleReserve} id={selectedId} onClose={handleCloseModal} />
                )}
            </div>




            {/* Hotel card  */}

            <div className="card w-96 h-[540px] bg-base-100 shadow-xl">
                <figure className="h-[280px]"><img className="h-[280px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <p>Region: {region}</p>
                    <div className="card-actions justify-end">

                        <button className="btn btn-primary" onClick={() => handleOpenModal(_id)}>View Rooms</button>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default HotelCard;