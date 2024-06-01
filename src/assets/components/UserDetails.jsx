import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const UserDetails = () => {
    const user = useLoaderData();
    const { _id, name, email, phoneNumber, address, photoUrl } = user;
    return (
        <div className="py-10 md:py-20">
            <div className="container">
                <div className="grid grid-cols-1 gap-5  md:grid-cols-3">
                    <div className="avatar col-span-full md:col-span-1">
                        <div className="w-full rounded md:w-60 lg:w-80">
                            <img src={photoUrl} />
                        </div>
                    </div>
                    <div className="col-span-full space-y-4 md:col-span-2 flex flex-col md:justify-between">
                        <div className="space-y-3">
                            <div className="border-b border-gray-600 pb-4">
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <div className="flex flex-col gap-4 md:flex-row md:gap-6">
                                    <p className="flex items-center gap-2">
                                        <MdEmail /> <span>{email}</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <FaPhone /> <span>{phoneNumber}</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-500">{address}</p>
                        </div>

                        <button className="btn btn-success">
                            <Link to="/">Bact To Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
