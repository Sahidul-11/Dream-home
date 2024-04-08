import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)

    const AuthInfo = {
        user
    }
    return (
      
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;