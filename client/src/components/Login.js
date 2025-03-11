import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { Box, Button } from '@mui/material'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  let decoded;
  let token;

  async function handleLogin(e) {
    try {
      e.preventDefault();
      let res = await axios.post("http://localhost:8000/login", { email, password });
      if (res.status === 200) {
        alert(res.data.msg);
        localStorage.setItem("token", res.data.token);
        navigate("/ExpenseManager")
      }
    } catch (error) {
      alert("Can not log in, please check your email or password");
    }
  }

  return (
    <div className="login">
      <h1>Login Form</h1>
      <form className="loginForm" onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
      </form>
      <p style={{
    paddingLeft: '600px',
    fontSize: '16px',
  }}>
        If you don't have an account yet, please{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer'  }}
          onClick={() => navigate('/register')}  
        >
          register here
        </span>
      </p>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '100px', marginTop: '0px', paddingLeft: '600px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/register')}  
        >
          Register
        </Button>
      </Box>
    </div>
  );
}

export default Login;