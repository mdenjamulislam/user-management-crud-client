import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvicer";

const SignUp = () => {
    const [error, setError] = useState(null);
    const { signUp } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        // check if password and confirm password match
        if (password !== confirm_password) {
            setError("Passwords do not match");
            return;
        }

        signUp(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="py-6 md:py-10">
            <div className="container">
                <div className="mx-auto w-full rounded-2xl border border-gray-600 p-4 md:max-w-3xl md:p-5">
                    <h2 className="pb-5 text-center text-xl font-semibold md:text-3xl">Sign Up</h2>
                    <form onSubmit={handleSignUp} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Full name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="confirm_password" placeholder="Confirm Password" className="input input-bordered w-full" />
                            <label className="lebel-text text-xs text-red-400">{error}</label>
                        </div>

                        <div className="col-span-full">
                            <button className="btn btn-primary w-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
