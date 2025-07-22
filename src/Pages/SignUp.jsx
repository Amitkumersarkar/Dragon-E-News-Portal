import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SignUp = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    // declared event handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data here
        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: 'Name must be more than 5 character long' });
            return;
        }
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, email, password);

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // console.log(user);
                // updateUserProfile({displayName:name,photoURL:photo})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-6 px-4">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold text-blue-800">SignUp now !</h1>
                    <p className="py-6 text-gray-500">
                        Please signup to your account to access your dashboard and continue exploring.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="card-body space-y-4">
                            <fieldset className="fieldset">
                                <label className="label font-semibold text-cyan-600">Name</label>
                                <input type="text" name="name" className="input" placeholder="Full Name" />
                                {error.name && <label className="text-xs text-red-600">
                                    {error.name}
                                </label>
                                }
                                <label className="label  font-semibold text-cyan-600">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="label  font-semibold text-cyan-600">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover text-red-700">Forgot password?</a></div>
                                <button className="btn btn-primary mt-4">Sign Up</button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;