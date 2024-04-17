import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { GoogleAuthProvider,GithubAuthProvider , createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null);
import { toast } from 'react-toastify';
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) 
    // create user
    const createUser = (email , password ) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // updateUser
    const updateUser =(name , url)=>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })     
    }
    // signInUser
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // SignOUt user
    const signOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }
    // google log in
    const googleProvider = new GoogleAuthProvider();
    const googleLogIn =()=>{
        setLoading(true);
         return signInWithPopup(auth, googleProvider);
    }
    //git hub provider
    const gitProvider = new GithubAuthProvider();
    const gitHubLogIng= ()=>{
        setLoading(true);
        return signInWithPopup(auth, gitProvider);

    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            if (currentUser) {
               setUser(currentUser);
               setLoading(false);
               console.log(currentUser.displayName)
            }
            else{
                setUser(null);
                setLoading(false);
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
        googleLogIn,
        loading,
        setLoading,
        updateUser,
        gitHubLogIng
        
    }
    return (
      
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;