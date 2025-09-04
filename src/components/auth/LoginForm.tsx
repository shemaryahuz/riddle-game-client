import React, { useState } from "react";
import { login, signup } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [ user, setUser]  = useState({ username: '', password: '' });
  const [ toSignup, setToSignup ] = useState(false);
  const [ message, setMessage ] = useState('');
  const navigate = useNavigate();

  const setUsername = (username: string) => {
    setMessage('')
    setUser((user) => ({ ...user, username: username }));
  }

  const setPassword = (password: string) => {
    setMessage('')
    setUser((user) => ({ ...user, password: password }));
  }

  const handleSubmit = async (event?: React.FormEvent) => {
    if (event) event.preventDefault();
    if (!user.username || !user.password) {
        setMessage('Username and Password are required!');
        return;
    }
    const result = toSignup ? await signup(user) : await login(user);
    if (result.error) {
        setMessage(result.error)
        return;
    }
    setMessage(result.message);
    navigate('/player-menu');
  };

  return (
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

      { message && <p className="message">{message}</p> }

      <button type="submit" className="login-btn">
        Login
      </button>
      <p>
        Do not have an account?
        <button 
            type="submit" 
            className="signup-btn" 
            onClick={() => {
                setToSignup(true);
                handleSubmit();
            }}
        >
          Signup
        </button>
      </p>
    </form>
  )
}
