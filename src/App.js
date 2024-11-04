import logo from "./logo.svg";
import "./Bootstrap.css";
import "./App.css";
import React from "react";

function App() {

  const [formData, setFormData] =React.useState({
    email: "",
    password: ""
  })

  function handleOnchange(event) {
      setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
     if(isEmailValid(formData.email) && isPasswordValid(formData.password)){
          console.log(formData);
    }else{
      console.log("Email or password is not valid")
    }
  }

  function isEmailValid(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  function isPasswordValid(password) {
    const regex = /^.{8,}$/;
    return regex.test(password);
  }

  return (
    <form onSubmit={handleOnSubmit} className="p-4">
      <p>email</p>
      <input type="text" name="email" onChange={handleOnchange} />
      <br />
      <p>Password</p>
      <input type="password" name="password" onChange={handleOnchange} />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default App;
