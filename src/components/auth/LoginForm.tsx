import React, { useState } from "react";
import { login, signup } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [toSignup, setToSignup] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const setUsername = (username: string) => {
    setError("");
    setToSignup(false);
    setUser((user) => ({ ...user, username: username }));
  };

  const setPassword = (password: string) => {
    setError("");
    setToSignup(false);
    setUser((user) => ({ ...user, password: password }));
  };

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    if (!user.username || !user.password) {
      setError("Username and Password are required!");
      return;
    }
    const result = toSignup ? await signup(user) : await login(user);
    if (result.error) {
      setError(`${toSignup ? "Signup" : "Login"} Faild: ${result.error}`);
      return;
    }
    setSuccess(true);
  };

  return !success ? (
    <form className="login-form" onSubmit={handleSubmit}>
      <section className="label-input">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </section>
      <section className="label-input">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </section>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" disabled={!!error}>
        Log in
      </button>
      <p className="signup-area">
        Do not have an account?
        <button
          type="submit"
          disabled={!!error}
          onClick={() => {
            setToSignup(true);
            handleSubmit();
          }}
        >
          Sign up
        </button>
      </p>
    </form>
  ) : (
    <section className="success">
      <p className="success-message">
        You {toSignup ? "Signed up" : "Logged in"} Successfully!
      </p>
      <button
        className="nav-menu-btn"
        disabled={!success}
        onClick={() => navigate("../player-menu")}
      >
        Go to Menu
      </button>
    </section>
  );
}
