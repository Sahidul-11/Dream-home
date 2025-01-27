import { useEffect, useState } from "react";
import Context from "../../Components/Context";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const Profile = () => {
    const { user, updateUser ,loading, setLoading } = Context()
    const [name, setName] = useState();
    const [photoURL, setPhotoURL] = useState();
    const navigate = useNavigate()
    useEffect(() => {
        setName(user.displayName);
        setPhotoURL(user.photoURL);
    }, [])
    if (loading) {
        return
    }
    console.log(name , photoURL)
    const handleUpdate = () => {
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        updateUser(name, photoURL)
        
            .then(res=>{
                if(res.user){
                     navigate("/")
                    setLoading(false)

                }
            })
            .catch(error=>{
                 setLoading(false)
                console.error(error.message)})
    }
    return (
        <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12 text-gray-50 bg-gray-800 w-full lg:w-1/2 mx-auto">
                <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
                <div className="space-y-4 text-center divide-y dark:divide-gray-300">
                    <div className="my-2 space-y-1">
                        <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName ? user.displayName : "No User Name"}</h2>
                    </div>
                    <div className=" pt-2 space-x-4 align-center">
                        <form className="w-full max-w-md mx-auto">

                            <div className="relative flex items-center mt-8">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input type="text" onChange={(e) => setName(e.target.value)} className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={name} placeholder="Username" />
                            </div>

                            <label for="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>

                                <h2 className="mx-3 text-gray-400">URL</h2>

                                <input onChange={(e) => setPhotoURL(e.target.value)} id="dropzone-file" type="url" className="text-black w-full" defaultValue={photoURL}  />
                            </label>

                            <div className="relative flex items-center mt-6">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" defaultValue={user.email} disabled />
                            </div>
                            <div className="mt-6">
                                <button type="button" onClick={()=>handleUpdate()} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;