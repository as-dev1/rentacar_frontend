import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/user");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="table-responsive-md">
          <table className="table table-responsive-md border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row" key={user.id}>
                    {index + 1}
                  </th>
                  <td className="text-nowrap">{user.first_name} {user.last_name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                  <div className="d-flex">
                    <Link
                      className="btn btn-sm btn-outline-primary mx-1 my-1"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-sm btn-danger mx-1 my-1"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
