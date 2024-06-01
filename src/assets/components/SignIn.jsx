import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvicer";

const SignIn = () => {
    const { signIn } = useContext(AuthContext);

    const hangleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
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
                    <h2 className="pb-5 text-center text-xl font-semibold md:text-3xl">Sign In</h2>
                    <form onSubmit={hangleSignIn} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
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

                        <div className="col-span-full">
                            <button className="btn btn-primary w-full">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
