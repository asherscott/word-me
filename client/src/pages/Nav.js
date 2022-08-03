import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const linkStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  const logoStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    fontSize: "3rem",
  };
  const renderNav = (
    <nav>
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
    </nav>
  );

  return (
    <header>
      <NavLink
        to="/"
        exact
        style={logoStyle}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Word-Me!
      </NavLink>

      {renderNav}
    </header>
  );
}

export default Nav;
