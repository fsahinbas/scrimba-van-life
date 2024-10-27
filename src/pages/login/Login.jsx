import React from "react";
import styles from "./login.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const pathname = location?.state?.pathname || "/host";
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        localStorage.setItem("loggedin", true);
        navigate(pathname, { replace: true });
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => setStatus("idle"));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };
  return (
    <div className={styles.login}>
      {location.state?.message && (
        <h3 className={styles.error}>{location.state.message}</h3>
      )}
      <h1 className={styles.title}>Sign in to your account</h1>
      {error?.message && <h3 className={styles.error}>{error.message}</h3>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={loginFormData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginFormData.password}
          onChange={handleChange}
          className={styles.input}
        />
        <button className={styles.btn} disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
      <div className={styles.signup}>
        Don’t have an account? <a href="#">Create one now</a>
      </div>
    </div>
  );
};

export default Login;
