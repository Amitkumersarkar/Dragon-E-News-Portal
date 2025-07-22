import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// declared auth context 
export const AuthContext = createContext();
// declared auth provider here
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user, loading);
    // share auth data 
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //integrate sign in method
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // declared signout method
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // auth profile updating here
    // const updateUserProfile = (updatedData) => {
    //     return updateProfile(auth.currentUser, updatedData)
    // }
    // create user info
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        // updateUserProfile
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        // returned function and stored user data
        return () => {
            unsubscribe();
        }
    }, []);
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;