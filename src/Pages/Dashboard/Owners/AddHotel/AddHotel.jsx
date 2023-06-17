import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const AddHotel = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {


        const { name, region, details, image } = data;
        const newHotel = { name, region, details, image, ownerName: user?.displayName, ownerEmail: user?.email };
        console.log(newHotel);


        fetch('http://localhost:5000/addHotels', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHotel)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Successfully added new product.',
                        'success'
                    )

                }
                // form.reset()
            })
            .catch(err => console.log(err))
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