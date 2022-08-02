import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    // login user
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        name="username"
        type="text"
        placeholder="Username"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name="password"
        type="password"
        placeholder="Password"
        minLength="6"
        required
      />
      <input
        onChange={(e) => setConfirm(e.target.value)}
        value={confirm}
        name="confirm"
        type="password"
        placeholder="Confirm Password"
        minLength="6"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
