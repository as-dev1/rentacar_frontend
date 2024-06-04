import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();

    const { id } = useParams();
  
    const [user, setUser] = useState({
      first_name: "",
      last_name: "",
      username: "",
      phone_number: "",
      email: "",
    });
  
    const { first_name, last_name, username, phone_number, email } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/user/${id}`, user);
        navigate("/users");
      };
    
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/api/user/${id}`);
        setUser(result.data);
      };
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 my-4 shadow text-center">
        <h2 className="text-center m-4">Edit User</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="First name" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              name="first_name"
              value={first_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Last name" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              name="last_name"
              value={last_name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Phone_number" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone number"
              name="phone_number"
              value={phone_number}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your E-mail"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/users">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  )
}

export default EditUser