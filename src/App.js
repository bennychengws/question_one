import moduleCss from "./App.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "testAccount",
    password: "abcd",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = formData
    if (username==="testAccount" && password==="abcd") {
      navigate("/home");
    } else {
      alert("Please enter a correct username and password")
    }
  };

  return (
    <div className={moduleCss.container}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <h3>Please enter your username and password to login</h3>
        <div className={moduleCss.inputBox}>
          <span>
            <label>Username: </label>
            <input
              id="username"
              type="text"
              value={formData.username}
              placeholder="Please enter your username"
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            ></input>
          </span>
          <span className={moduleCss.passwordBox}>
            <label>Password: </label>
            <input
              id="password"
              type="password"
              placeholder="Please enter your password"
              value={formData.password}
              autoComplete="off"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            ></input>
          </span>
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
