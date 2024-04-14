import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
             <div className="sticky top-0 z-30"> <Navbar ></Navbar></div>
            <div className=" w-full md:w-11/12 lg:w-10/12 mx-2 lg:mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;