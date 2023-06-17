import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
// import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";


const AddRooms = () => {

    const { user } = useAuth();
    const location = useLocation();
    const hotelInfo = location.state.state;
    console.log(hotelInfo);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {


        const { name, region, details, image } = data;
        const newHotel = { name, region, details, image, ownerName: user?.displayName, ownerEmail: user?.email };
        console.log(newHotel);


        // fetch('http://localhost:5000/addHotels', {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(newHotel)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if (data?.insertedId) {
        //             Swal.fire(
        //                 'Good job!',
        //                 'Successfully added new product.',
        //                 'success'
        //             )

        //         }
        //         // form.reset()
        //     })
        //     .catch(err => console.log(err))
    }



    return (
        <div className="w-full px-14">
            <h2 className="text-[#BE4C23] mb-16 text-2xl font-bold text-center">Add New Class</h2>


            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 p-6 rounded-md">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Room Type*</span>
                    </label>
                    <input type="text" placeholder="Room Type"
                        {...register("type", { required: true, maxLength: 120 })} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Room Details*</span>
                    </label>
                    <textarea placeholder="Room Details" {...register('roomDetails', { required: true })} className="input input-bordered w-full" style={{ height: '100px', padding: '10px' }} />
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Max People*</span>
                    </label>
                    <input type="number" placeholder="Maximum People"
                        {...register("people", { required: true })} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Price/Night*</span>
                    </label>

                    <input type="number" placeholder="Price"
                        {...register("price", { required: true })} className="input input-bordered w-full" />
                </div>





                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Owner Email*</span>
                    </label>
                    <input
                        className="px-4 py-3 rounded-lg"
                        {...register("ownerEmail")}
                        readOnly
                        type="text"
                        name="ownerEmail"
                        defaultValue={user.email} // Set default value from useAuth hook
                    />
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Hotel Name*</span>
                    </label>
                    <input
                        className="px-4 py-3 rounded-lg"
                        {...register("hotelName")}
                        readOnly
                        type="text"
                        name="hotelName"
                        defaultValue={hotelInfo?.name} // Set default value from useAuth hook
                    />
                </div>




                <div className="flex justify-between items-center">

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image*</span>
                        </label>
                        <input type="url" placeholder="Image URL"
                            {...register("image", { required: true })} className="input input-bordered w-full" />
                    </div>



                    <input type="submit" className="btn btn-md mt-8" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddRooms;