import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    // create user
    const createUser = (email , password ) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // signInUser
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // SignOUt user
    const signOutUser =()=>{
        return signOut(auth);
    }
    // google log in
    const googleProvider = new GoogleAuthProvider();
    const googleLogIn =()=>{
         return signInWithPopup(auth, googleProvider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if (currentUser) {
               setUser(currentUser);
               console.log(user)
            }

        });
        return () => {
            unsubscribe();
        }
    },[])
    const AuthInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        googleLogIn
    }
    return (
      
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;