import React from "react";
import UserCard from "./UserCard";

const AllUsers = ({ users, setUsers }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-7">
            {users.map((user) => (
                <UserCard key={user._id} user={user} users={users} setUsers={setUsers} />
            ))}
        </div>
    );
};

export default AllUsers;
