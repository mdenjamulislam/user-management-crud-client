import { data } from "autoprefixer";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AllUsers from "../components/AllUsers";

const Dashboard = () => {

    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    
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
                        <Link to="/adduser" className="flex items-center gap-1 rounded border border-blue-700 bg-blue-700 px-4 py-1.5 text-sm text-white hover:bg-blue-500 hover:text-white md:text-base">
                            <span>Add user</span>
                        </Link>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                
                            </div>
                        </dialog>
                        {/* End of the user dialog */}
                    </div>
                </div>
                {/* End of the card top (filter and sort and add new user) */}

                {/* User card */}
                <AllUsers users={users} setUsers={setUsers} />
            </div>
        </section>
    );
};

export default Dashboard;
