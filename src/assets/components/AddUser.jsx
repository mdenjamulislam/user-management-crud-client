import React from "react";

const AddUser = () => {

    const handleNewUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const phoneNumber = form.phone_number.value;
        const email = form.email.value;
        const address = form.address.value;
        const photoUrl = form.photo_url.value;

        const user = { name, phoneNumber, email, address, photoUrl };

        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div className="container py-10 md:py-20">
            <div className="w-full md:max-w-3xl mx-auto">
                <h3 className="mb-5 text-center text-lg font-bold md:mb-8 md:text-xl">Creae a new user</h3>

                <form onSubmit={handleNewUser} className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Full name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input type="text" name="phone_number" placeholder="Phone number" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
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
                        <textarea type="text" name="address" placeholder="Address" className="textarea textarea-bordered h-20 w-full"></textarea>
                    </div>
                    <div className="col-span-full form-control w-full">
                        <label className="label">
                            <span className="label-text">Profile Photo</span>
                        </label>
                        <input type="text" name="photo_url" placeholder="Profile Photo URL" className="input input-bordered w-full" />
                    </div>

                    <div className="col-span-full">
                        <button className="btn btn-primary w-full">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
