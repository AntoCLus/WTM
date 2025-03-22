import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate()
  async function handleRegister(e) {
    e.preventDefault();
    let res = await axios.post("http://localhost:8000/register",{email, password, name, lastName})
    alert(res.data.msg)
    navigate("/login")
  }
  return (
    <div className="form">
      <h1>Sign Up Form</h1>
      <form className="loginForm" onSubmit={handleRegister}>
      <label htmlFor="userName">Name</label>
        <input
          id="userName"
          type="name"
          value={name}
          placeholder="Enter your email"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="userLastname">Last Name</label>
        <input
          id="userLastName"
          type="lastName"
          value={lastName}
          placeholder="Enter your email"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="userEmail">Email</label>
        <input
          id="userEmail"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Register;