import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Context = () => {
    const commonContext = useContext(AuthContext);
    return commonContext;
};

export default Context;