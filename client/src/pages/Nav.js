import { NavLink } from "react-router-dom";

function Nav() {
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <NavLink
        to="/words"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Word Lists
      </NavLink>
      <NavLink
        to="/lists"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Missing a Word?
      </NavLink>
    </div>
  );
}

export default Nav;
