import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

const PrivateRoutes = ({ children }) => {
    // import user from auth context
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    if (loading) {
        // returning loading components
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoutes;