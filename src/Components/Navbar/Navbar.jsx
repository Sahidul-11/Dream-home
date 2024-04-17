import { NavLink } from "react-router-dom";
import Context from "../Context";
import Swal from "sweetalert2";
import 'animate.css';
const Navbar = () => {
    const { user,signOutUser, loading } = Context();
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        {
            user && <>
            <li><NavLink to="/profile">Update Profile</NavLink></li>
            <li><NavLink to="/message">Message us</NavLink></li>
            </>
        }
    </>
   const HandleLogOut =(e)=>{
    e.preventDefault();
    signOutUser()
    Swal.fire({
        position: "top",
        icon: "success",
        title: "You logged Out successfully",
        showConfirmButton: false,
        timer: 2000
      })
   }
   if(loading){
    return <div className="w-16 h-16 mt-10 border-4 border-dashed rounded-full animate-spin border-violet-600 mx-auto"></div>
   }   
    return (
        <div>
            <div className="navbar bg-base-100 shadow-2xl mb-10 rounded-md w-full md:w-11/12 lg:w-10/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm flex items-center dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl text-amber-600 font-extrabold animate-animated  animate__heartBeat animate__infinite">Dream Home</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                   {
                    user? <>
                     <div className="tooltip tooltip-bottom" data-tip={user?.displayName? user.displayName : "Unknown user name"}>
                        <NavLink className="">
                            <div className="avatar online placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                {
                                    user?.photoURL? <img src={user.photoURL} alt="" />: <span className="text-xl">AI</span>
                                }
                                   
                                </div>
                            </div>
                        </NavLink>
                    </div>
                     <NavLink to="login"><button onClick={HandleLogOut} type="submit" className="btn bg-[#e33324] text-white font-semibold ml-3 hover:text-[#e33324] hover:bg-black ">Log out</button></NavLink>
                    </> :  <NavLink to="/login" className="btn btn-ghost bg-[#e33324] text-white font-semibold hover:text-[#e33324] hover:bg-black ">Log In</NavLink>
                              
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;