import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";

const UserCard = ({ user }) => {
    const { name, phoneNumber, email, address, photoUrl } = user;
    return (
        <div className="space-y-3.5 rounded-xl border p-4 md:p-5">
            <div>
                <img src={photoUrl} alt={name} className="h-auto w-full rounded-lg object-cover" />
            </div>
            <h4>{name}</h4>
            <div>
                <p className="flex items-center gap-1 text-xs md:text-sm">
                    <span>{email}</span>
                </p>
                <p className="flex items-center gap-1 text-xs md:text-sm">
                    <span>{phoneNumber}</span>
                </p>
            </div>
            <div className="border-t border-gray-600 pt-2">
                <p>{address}</p>
            </div>
            <div className="flex items-center justify-between">
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
                        <div className="w-7 rounded-full">
                            <span className=" flex h-full w-full items-center justify-center bg-blue-400 text-sm text-white">5+</span>
                        </div>
                    </div>
                </div>
                {/* End of the user gallery */}
                {/* Action */}
                <div className="flex items-center gap-2">
                    <button>
                        <FaRegEye className="text-sm md:text-base text-gray-400 hover:text-white" />
                    </button>
                    <button>
                        <RiDeleteBin6Line className="text-sm md:text-base text-gray-400 hover:text-white"/>
                    </button>
                    <button>
                        <MdOutlineEdit className="text-sm md:text-base text-gray-400 hover:text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
