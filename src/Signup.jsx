import axios from "axios";
import { useState, useEffect } from "react";
import "./Signup.scoped.scss";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handlePageSwitch = () => {
    const element = document.getElementById("signup");
    element.scrollIntoView();
  };

  useEffect(handlePageSwitch, []);

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(response => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(error => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Sign Up</h1>
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="name" type="text" className="form-control" placeholder="name" />
        </div>
        <div>
          <input name="email" type="email" className="form-control" placeholder="email" />
        </div>
        <div>
          <input name="password" type="password" className="form-control" placeholder="password" />
        </div>
        <div>
          <input
            name="password_confirmation"
            type="password"
            className="form-control"
            placeholder="re-enter password"
          />
        </div>
        <button id="button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
