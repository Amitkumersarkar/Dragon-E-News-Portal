import { createContext, useState } from "react";

// declared auth context 
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: 'amit',
        email: "amit@gmail.com"
    });
    // create user info
    const authInfo = {
        user,
        setUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;