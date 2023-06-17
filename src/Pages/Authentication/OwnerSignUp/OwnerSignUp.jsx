
import { useForm } from "react-hook-form";
import { FaEnvelope, FaLock, FaPhotoVideo, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useRef } from "react";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";


const OwnerSignUp = () => {

    const { createUser, updateUserProfile, logOut } = useAuth();
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const password = useRef({});
    password.current = watch('password', '');


    const navigate = useNavigate();


    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, image: data.photo }

                        fetch('http://localhost:5000/usersOwner', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Owner Created Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }
                            })


                        logOut()
                            .then(() => { })
                            .catch(err => console.log(err))

                        navigate('/login')

                    })
                    .catch(err => console.log(err))
            })
            .catch(error => console.log(error))

    };



    return (
        <div>
            <div className="hero pb-14 pt-24 bg-base-200 ">
                <div className="hero-content md:w-full">
                    <div className="card flex-shrink-0 shadow-2xl bg-base-100 md:w-[600px]">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body space-y-4 ">


                            <div className="form-control ">
                                <label className="input-group input-group-md">
                                    <span className="border-2
                                    border-slate-800 bg-white border-r-0"><FaEnvelope></FaEnvelope></span>
                                    <input {...register("email", { required: true })} type="text" placeholder="Email" className="input border-2 border-slate-800 w-full" />
                                </label>
                                {errors.email?.type === 'required' && <p className="text-red-500">email is required.</p>}
                            </div>


                            <div className="form-control">
                                <label className="input-group input-group-md">
                                    <span className="border-2
                                    border-slate-800 bg-white border-r-0"><FaLock></FaLock></span>
                                    <input {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                    })} type="password" placeholder="Password" className="input border-2 border-slate-800 w-full" />
                                </label>

                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required.</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase and one special charecter.</p>}

                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 charecters.</p>}

                                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less then 20 charecters.</p>}
                            </div>

                            <div className="form-control">
                                <label className="input-group input-group-md">
                                    <span className="border-2
                                    border-slate-800 bg-white border-r-0"><FaLock></FaLock></span>
                                    <input {...register("confirmPassword", {
                                        required: true,
                                        validate: value => value === password.current || 'Passwords do not match',
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                    })} type='password' placeholder="Re-type Password" className="input border-2 border-slate-800 w-full" />

                                </label>


                                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}

                            </div>

                            <div className="flex space-x-4">
                                <div className="form-control ">
                                    <label className="input-group input-group-md">
                                        <span className="border-2
                                    border-slate-800 bg-white border-r-0"><FaUser></FaUser></span>
                                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input border-2 border-slate-800 w-full" />
                                    </label>
                                </div>

                                <div className="form-control ">
                                    <label className="input-group input-group-md">
                                        <span className="border-2
                                    border-slate-800 bg-white border-r-0"><FaPhotoVideo></FaPhotoVideo></span>
                                        <input {...register("photo", { required: true })} type="url" placeholder="Photo URL" className="input border-2 border-slate-800 w-full" />
                                    </label>
                                </div>
                            </div>

                            <div className="form-control">
                                <button className="btn btn-primary">SignUp</button>
                            </div>

                            <h3 className="mt-0">Already have an account? <span><Link to="/login">Log In</Link></span></h3>

                            <div className="">
                                {/* <SocialLogin></SocialLogin> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerSignUp;