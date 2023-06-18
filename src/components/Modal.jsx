import { useQuery } from '@tanstack/react-query';
// import React, { useState } from 'react';

const Modal = ({ id, onClose, handleReserve }) => {
    // const [data, setData] = useState('');

    // Fetch data based on the provided ID
    // You can replace this with your own logic to fetch the data
    // const fetchData = () => {
        //     fetch(`http://localhost:5000/rooms/${id}`)
        //         .then(res => res.json())
        //         .then(data => {
        //             setData(data)
        //         })

        const { data: rooms, isLoading } = useQuery({
            queryKey: ['rooms', id],

            // enabled: !loading && !!user?.email,

            queryFn: async () => {
                const res = await fetch(`http://localhost:5000/rooms/${id}`)
                console.log('is owner response', res)
                return res.json();
            }
        })


    // };



    // Close the modal
    const handleClose = () => {
        // setData('');
        onClose();
    };

    // Fetch data when the modal is opened
    // React.useEffect(() => {
    //     fetchData();
    // }, [id]);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-20 ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">


                <p>{
                    !isLoading && rooms?.map(room => <div key={room._id}>
                        <h2 className="text-xl font-bold">{room?.type}</h2>
                        <p>{room?.roomDetails}</p>
                        <p>Max People: {room?.people}</p>
                        <p>${room?.price}</p>
                        <button onClick={() => handleReserve(room)} className="btn btn-sm mt-4 btn-primary">Reserve</button>
                    </div>)
                }</p>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
