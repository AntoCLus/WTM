 /*import { Logo } from "../util";
import "./auth.css";
import { Button } from "../util";
import { useAuthStore, useForm } from "../../hooks";
import { useNavigate } from "react-router-dom";

const loginForUser = {
  loginUsername: "",
  loginPassword: "",
};

 const LoginForm = () => {
  const navigate = useNavigate();
  const register = () => {
    navigate("/register");
  };

  const { startLogin } = useAuthStore();

  const { loginUsername, loginPassword, onInputChange } = useForm(loginForUser);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    if (loginUsername.trim() == "" || loginPassword.trim() == "") {
      alert("wrong username or password");
    }else{
      startLogin({ username: loginUsername, password: loginPassword });
    }
    
  };

  return (
    <div className="contenedor">
      <div className="formulario-logo">
        <Logo />
      </div>
      <div className="welcome">
        <div className="welcome-bienvenido">
          <h1>welcome</h1>
          <h3>Login</h3>
        </div>
         <form onSubmit={onLoginSubmit}>
          <div>
            <input
              placeholder="User"
              type="text"
              onChange={onInputChange}
              name="loginUsername"
              value={loginUsername}
            />
          </div>
          <div>
            <input
              placeholder="pass"
              type="password"
              onChange={onInputChange}
              name="loginPassword"
              value={loginPassword}
            />
          </div>
          <a href="#" className="link">Did you forget your password?</a>
          <p className="link" onClick={register}>Register</p>
          <div>
            <Button title={"Login"} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginForm*/
