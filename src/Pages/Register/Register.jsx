import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5"
import Context from '../../Components/Context';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const Register = () => {
    const { register, handleSubmit } = useForm()
    const [show, setShow] = useState(true);
    const {createUser,
         setLoading,
         updateUser
        
        } = Context()
    const navigate = useNavigate(); 
    const HandleRegister = (data)=>{
        const{email, password , name , url} = data;
        createUser(email, password)
        .then(result =>{
            updateUser(name , url)
           if (result.user){
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Registered successfully",
                showConfirmButton: false,
                timer: 2000
              });
            navigate("/")
           }
        })
        .catch(error=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text:"Email Already exist",
              });
            setLoading(false)
        })
    }
    return (
            <div>
                <div className=" w-full md:w-2/3 lg:w-2/4 rounded-md sm:p-8 dark:bg-gray-50 dark:text-gray-800 mx-auto shadow-xl">
                    <h2 className="mb-3 text-3xl font-semibold text-center">Register now !</h2>
                    <p className="text-sm text-center dark:text-gray-600">Already Registered?
                        <Link to="/login" className="focus:underline hover:underline text-[#e33324] hover:text-[#0f0807] font-semibold"> Log in here</Link>
                    </p>
                    <form onSubmit={handleSubmit(HandleRegister)} className="space-y-8">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Your name</label>
                                <input type="text" {...register("name") } placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Email address</label>
                                <input required type="email"{...register("email") } placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm">Photo URL</label>
                                <input type='text' {...register("url") } placeholder="Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <input  required type={show ? "password" : "text"} {...register("password", { pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/ })} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                    <div onClick={() => setShow(!show)} className=" absolute right-3 top-3 text-xl">
                                        {
                                            show ? <FaEyeSlash /> : <IoEyeSharp />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md btn btn-secondary bg-[#e33324]">Register</button>
                    </form>
                </div>

            </div>
                );
};

                export default Register;