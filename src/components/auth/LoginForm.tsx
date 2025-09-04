import React, { useState } from "react";
import { login, signup } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [ user, setUser]  = useState({ username: '', password: '' });
  const [ toSignup, setToSignup ] = useState(false);
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState(false);
  const navigate = useNavigate();

  const setUsername = (username: string) => {
    setError('')
    setUser((user) => ({ ...user, username: username }));
  }

  const setPassword = (password: string) => {
    setError('')
    setUser((user) => ({ ...user, password: password }));
  }

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    if (!user.username || !user.password) {
        setError('Username and Password are required!');
        return;
    }
    const result = toSignup ? await signup(user) : await login(user);
    if (result.error) {
        setError(`${toSignup? 'Signup': 'Login'} Faild: ${result.error}`)
        return;
    }
    setSuccess(true);
  };

  return (
    !success ? (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Enter username"
        required
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        required
        onChange={(event) => setPassword(event.target.value)}
      />

      { error && <p className="message">{error}</p> }

      <button 
        type="submit"
        className="login-btn"
        disabled={!!error}
      >
        Login
      </button>
      <p>
        Do not have an account?
        <button 
            type="submit" 
            className="signup-btn" 
            disabled={!!error}
            onClick={() => {
                setToSignup(true);
                handleSubmit();
            }}
        >
          Signup
        </button>
      </p>
    </form> ) : (
    <section className="success" >
      <p className="success-message" >
        You {toSignup ? 'Signed up': 'Logged in'} Successfully!
      </p>
      <button 
        className="nav-menu-btn"
        disabled={!success}
        onClick={() => navigate("../player-menu")}
      >
        Go to Menu
      </button>
    </section>
    )
  );
}
