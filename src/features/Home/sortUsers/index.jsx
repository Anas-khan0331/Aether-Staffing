import React from "react";

const SortUsers = ({ users }) => {
  console.log("users", users);

  return (
    <div>
      <h2>Sort Users</h2>
      <p>Total users: {users?.length}</p>
      <select>
        {users?.map((user) => (
          <option key={user.id} value={user.name}>
            {user.firstName} {user.lastName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortUsers;
