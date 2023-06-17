import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
// import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";


const Login = () => {

    const { signIn } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const [show, setShow] = useState(false);

    const handelShowPass = () => {
        setShow(!show)
    }

    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))
    };

    console.log(errors);



    return (
        <div>


            <div className="hero pb-14 pt-24 bg-base-200">
                <div className="hero-content w-full justify-around flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />

                                {errors.email?.type === 'required' && <p className="text-red-500">Email is required.</p>}
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input-group input-group-md">
                                    <input {...register("password", {
                                        required: true,
                                        maxLength: 20,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/

                                    })} type={`${show ? 'text' : 'password'}`} placeholder="password" className="input input-bordered w-full" />

                                    <span onClick={handelShowPass}>
                                        {
                                            show ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                        }
                                    </span>
                                </label>



                                {errors.password?.type === 'required' && <p className="text-red-500">Password is required.</p>}

                                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase and one special charecter.</p>}

                                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 charecters.</p>}

                                {errors.password?.type === 'maxLength' && <p className="text-red-500">Password must be less then 20 charecters.</p>}


                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <h3>New to Beat StellarStay? <span><Link to="/signup">Sign Up</Link></span></h3>

                            {/* <SocialLogin></SocialLogin> */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;