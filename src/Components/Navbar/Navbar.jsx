import { Link, NavLink } from "react-router-dom";
import Context from "../Context";

const Navbar = () => {
    const { user,signOutUser } = Context();
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    console.log(user)
    return (
        <div>
            <div className="navbar bg-base-100 static shadow-2xl mb-10 rounded-md">
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
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
                     <div className="tooltip tooltip-bottom" data-tip="hello">
                        <NavLink className="">
                            <div className="avatar online placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-12">
                                    <span className="text-xl">AI</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                     <button onClick={()=> signOutUser()} type="button" className="btn bg-[#e33324] text-white font-semibold ml-3 hover:text-[#e33324] hover:bg-black ">Log out</button>
                    </> :  <NavLink to="/login" className="btn btn-ghost bg-[#e33324] text-white font-semibold">Log In</NavLink>
                              
                   }
                </div>
            </div>
        </div>
    );
};

export default Navbar;