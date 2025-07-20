import { Link } from "react-router-dom";
import userIcon from "../../../public/assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        // main div
        <div className="flex justify-between items-center">
            {/* user info div */}
            <div className="">{user && user.name}</div>
            <div className="nav space-x-5 font-semibold">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/carrier'>Carrier</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className="btn btn-primary rounded-none"> LogOut</button> : <Link to='/auth/login' className="btn btn-primary rounded-none">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;