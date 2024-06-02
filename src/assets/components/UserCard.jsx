import React from "react";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const UserCard = ({ user, users, setUsers }) => {
    const { _id, name, phoneNumber, email, address, photoUrl } = user;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            const remainingUsers = users.filter((user) => user._id !== id);
                            setUsers(remainingUsers);
                        }
                    });
            }
        });
    };
    return (
        <div className="space-y-3.5 rounded-xl border p-4 md:p-5">
            <div>
                <img src={photoUrl} alt={name} className="h-60 md:h-64 w-full rounded-lg object-cover" />
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
                    
                </div>
                {/* End of the user gallery */}
                {/* Action */}
                <div className="flex items-center gap-2">
                    <Link to={`/users/${_id}`}>
                        <FaRegEye className="text-sm text-gray-400 hover:text-white md:text-base" />
                    </Link>
                    <button onClick={() => handleDelete(_id)}>
                        <RiDeleteBin6Line className="text-sm text-gray-400 hover:text-white md:text-base" />
                    </button>
                    <Link to={`/updateuser/${_id}`}>
                        <MdOutlineEdit className="text-sm text-gray-400 hover:text-white md:text-base" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
