import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, updateUser, deleteUser } from "./actions/actions";

const App = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    dispatch(addUser(newUser));
  };

  const handleUpdateUser = (id) => {
    const updatedUser = { name: "Updated Name", email: "updated@example.com" };
    dispatch(updateUser(id, updatedUser));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <button
        onClick={handleAddUser}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add User
      </button>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between border p-2 rounded"
          >
            <div>
              <span className="font-semibold">{user.name}</span> -{" "}
              <span>{user.email}</span>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleUpdateUser(user.id)}
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;