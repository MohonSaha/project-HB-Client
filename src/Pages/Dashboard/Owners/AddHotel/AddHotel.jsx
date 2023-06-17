import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
// import Swal from "sweetalert2";


const AddHotel = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);


        // const { name, price, seats, image } = data;
        // const newClass = { name, price: parseFloat(price), seats: parseFloat(seats), image, InsName: user?.displayName, InsEmail: user?.email };

        // console.log(newClass);

        // axiosSecure.post('/classes', newClass)
        //     .then(data => {
        //         console.log('After posting new classes', data.data);
        //         if (data.data.insertedId) {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: 'Successfully Added',
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //             reset();
        //         }
        //     })
    }



    return (
        <div className="w-full px-14">
            <h2 className="text-[#BE4C23] mb-16 text-2xl font-bold text-center">Add New Class</h2>


            <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 p-6 rounded-md">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Hotel Name*</span>
                    </label>
                    <input type="text" placeholder="Hotel name"
                        {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full" />
                </div>


                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Hotel Region*</span>
                    </label>
                    <input type="text" placeholder="Hotel Region"
                        {...register("region", { required: true })} className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Hotel Details*</span>
                    </label>


                    <textarea placeholder="Hotel Details" {...register('details', { required: true })} className="input input-bordered w-full" style={{ height: '100px', padding: '10px' }} />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Owner Name*</span>
                    </label>
                    <input
                        className="px-4 py-3 rounded-lg"
                        {...register("ownerName")}
                        readOnly
                        type="text"
                        name="ownerName"
                        defaultValue={user.displayName} // Set default value from useAuth hook
                    />
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

export default AddHotel;