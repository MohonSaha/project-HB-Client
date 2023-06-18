import { useQuery } from "@tanstack/react-query";


const HotelCard = ({ hotel }) => {

    const { name, image, location, details, _id } = hotel;

    const { data: rooms=[]} = useQuery({
        queryKey: ['rooms'],

        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/rooms/${_id}`)
            console.log('is rooms response', res)
            return res.json()
        }
    })

    return (
        <div>

{/* 
            <button className="btn" onClick={() => window.my_modal_3.showModal()}>open modal</button> */}
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-lg">{rooms.length}</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
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