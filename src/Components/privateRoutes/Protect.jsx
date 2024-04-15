import { Navigate, useLocation } from "react-router-dom";
import Context from "../Context";

const Protect = ({children}) => {
    const{user , loading } = Context()
    const location = useLocation()
    

    if (loading) {
        return
    }
    if (!user) {
        return <Navigate to="/login" state={location?.pathname || "/"} ></Navigate>
    }
    return (
        <div>
           {
            children
           } 
        </div>
    );
};

export default Protect;