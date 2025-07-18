import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login</h2>
            <div className="*:w-full space-y-2">
                <button className="btn"><FcGoogle /> LogIn With Google </button>
                <button className="btn"><FaGithub /> LogIn With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;