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
    console.log(user);
    // share auth data 
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //integrate sign in method
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // declared signout method
    const logOut = () => {
        return signOut(auth);
    }
    // create user info
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
        // returned function and stored user data
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;