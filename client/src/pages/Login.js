import { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // login user
  }

  return (
    <main id="Login">
      <form onSubmit={handleLogin}>
        <label className="login-label">Login</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="login-input"
          name="username"
          type="text"
          placeholder="Username"
          required
        />

        <label className="login-label">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="login-input"
          name="password"
          type="password"
          placeholder="Password"
          minLength="6"
          required
        />

        <label className="login-label">Confirm Password</label>
        <input
          onChange={(e) => setConfirm(e.target.value)}
          value={confirm}
          className="login-input"
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          minLength="6"
          required
        />
        <button type="submit" className="login-input">
          Login
        </button>
      </form>

      <div className="small-text">
        <p>Accounts are used to add words to our list.</p>
      </div>
    </main>
  );
}

export default Login;
