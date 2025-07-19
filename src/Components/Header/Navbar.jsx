import { Link } from "react-router-dom";
import userIcon from "../../../public/assets/user.png"
const Navbar = () => {
    return (
        // main div
        <div className="flex justify-between items-center">
            {/* empty div */}
            <div className=""></div>
            <div className="nav space-x-5 font-semibold">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/carrier'>Carrier</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" />
                </div>
                <Link to='/auth/login' className="btn btn-primary rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;