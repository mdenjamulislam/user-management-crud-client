import React from "react";

const Dashboard = () => {

    const handleNewUser = (e) => {
        e.preventDefault();

        const form = e.target.form;
        const name = form.name.value;
        const phoneNumber = form.phoneNumber.value;
        const email = form.email.value;
        const address = form.address.value;

        const user = { name, phoneNumber, email, address };
        


    }
    return (
        <section>
            <div className="container">
                <div className="flex items-center justify-between gap-5">
                    {/* Filter */}
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1 rounded border border-gray-400 px-2 py-1 text-xs hover:bg-blue-500 hover:text-white md:text-sm">
                            <span>Preview</span>
                        </button>
                        <button className="flex items-center gap-1 rounded border border-gray-400 px-2 py-1 text-xs hover:bg-blue-500 hover:text-white md:text-sm">
                            <span>Sort</span>
                        </button>
                    </div>

                    {/* Add User Button */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className="flex items-center -space-x-3">
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-7 rounded-full">
                                    <span className=" flex h-full w-full items-center justify-center bg-blue-400 text-sm text-white">5+</span>
                                </div>
                            </div>
                        </div>
                        {/* End of the user avatar */}
                        <button onClick={() => document.getElementById("my_modal_5").showModal()} className="flex items-center gap-1 rounded border border-blue-700 bg-blue-700 px-4 py-1.5 text-sm text-white hover:bg-blue-500 hover:text-white md:text-base">
                            <span>Add user</span>
                        </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="text-lg md:text-xl text-center mb-5 md:mb-8 font-bold">Creae a new user</h3>

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
                                        <input type="text" name="phone-number" placeholder="Phone number" className="input input-bordered w-full" />
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
                                        <textarea type="text" name="address" placeholder="Address" className="textarea textarea-bordered h-20 w-full">
                                            {" "}
                                        </textarea>
                                    </div>

                                    <div className="col-span-full">
                                        <button className="btn btn-primary w-full">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                        {/* End of the user dialog */}
                    </div>
                </div>
                {/* End of the card top (filter and sort and add new user) */}


                {/* User card */}

            </div>
        </section>
    );
};

export default Dashboard;
