import React, { useState } from "react";
import { Input } from "../component";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState("login");
  const [rotation, setRotation] = useState(300);

  const activeLoginForm = (formState) => {
    setFormState(formState.id);
    setRotation(rotation === 300 ? 450 : 300);
  };

  return (
    <div className="container">
      <div className={`form-control ${formState}`}>
        <div className="content">
          <h1>Login</h1>
          <Input
            type="text"
            className="inputText"
            label="Username"
            value={username}
            placeholder=" "
            required={true}
            onChange={setUsername}
          />
          <Input
            type="password"
            label="Password"
            className="inputText"
            value={password}
            placeholder=" "
            required={true}
            onChange={setPassword}
          />
          <div className="group">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>

          <button>Sign In</button>
        </div>

        <div className="content">
          <h1>Register</h1>
          <Input
            type="text"
            className="inputText"
            label="Username"
            value={username}
            placeholder=" "
            required={true}
            onChange={setUsername}
          />
          <Input
            type="password"
            label="Password"
            className="inputText"
            value={password}
            placeholder=" "
            required={true}
            onChange={setPassword}
          />
          <div className="group">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>

          <button>Sign Up</button>
        </div>

        <div className="form-rotate">
          <div
            id="rotate"
            style={{ transform: `translate(-50%) rotate(${rotation}deg)` }}
          ></div>
        </div>
      </div>

      <div className="option">
        <div
          className={`changeType ${formState === "login" ? "active" : ""}`}
          id="login"
          onClick={(e) => activeLoginForm(e.target)}
        >
          Login
        </div>
        <div
          className={`changeType ${formState === "login" ? "" : "active"}`}
          id="register"
          onClick={(e) => activeLoginForm(e.target)}
        >
          Register
        </div>
        <div className="bg-active" id="bg-active"></div>
      </div>
    </div>
  );
};

export default Login;
