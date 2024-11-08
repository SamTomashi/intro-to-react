import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser(formData.email);
    if (checkCredentials(formData.password)) {
      navigate("/home");
    } else {
      console.log("wrong credentials");
    }
  };

  const getUser = (email) => {
    fetch(`http://localhost:4000/users?email=${email}`)
      .then((response) => response.json())
      .then((data) => setCurrentUser(() =>  data));
  };

  const checkCredentials = (password) => {
    return currentUser??[0].password === password;
  };

  return (
    <form className="g-3 my-4 p-4" onSubmit={handleSubmit}>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-6">
          <input
            type="email"
            class="form-control"
            id="staticEmail"
            value={formData.email}
            placeholder="your email"
            name="email"
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-6">
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Your password"
            name="password"
            value={formData.password}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div class="mb-3 row">
        <div className="col-sm-6 mx-auto">
          <button className="btn btn-success btn-sm" type="submit">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
