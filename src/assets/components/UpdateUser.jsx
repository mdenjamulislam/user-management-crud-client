import { data } from "autoprefixer";
import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
    const user = useLoaderData();
    const { _id, name, phoneNumber, email, address, photoUrl } = user;

    const handleUpdateUser = (e) => {
        e.preventDefault;

        const form = e.target;
        const name = form.name.value;
        const phoneNumber = form.phone_number.value;
        const email = form.email.value;
        const address = form.address.value;
        const photoUrl = form.photo_url.value;

        const user = { name, phoneNumber, email, address, photoUrl };
        

        fetch(`http://localhost:5000/users/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div className="container py-10 md:py-20">
            <div className="mx-auto w-full md:max-w-3xl">
                <h3 className="mb-5 text-center text-lg font-bold md:mb-8 md:text-xl">Creae a new user</h3>

                <form onSubmit={handleUpdateUser} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Full name" defaultValue={name} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name="phone_number" placeholder="Phone number" defaultValue={phoneNumber} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" defaultValue={email} className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2">
                                <span>Male</span>
                                <input type="radio" name="male" className="radio-primary radio" />
                            </label>
                            <label className="flex items-center gap-2">
                                <span>Female</span>
                                <input type="radio" name="female" className="radio-primary radio" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control col-span-full w-full">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea type="text" name="address" placeholder="Address" defaultValue={address} className="textarea textarea-bordered h-20 w-full"></textarea>
                    </div>
                    <div className="form-control col-span-full w-full">
                        <label className="label">
                            <span className="label-text">Profile Photo</span>
                        </label>
                        <input type="text" name="photo_url" placeholder="Profile Photo URL" defaultValue={photoUrl} className="input input-bordered w-full" />
                    </div>

                    <div className="col-span-full">
                        <button type="submit" className="btn btn-primary w-full">Update User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;
