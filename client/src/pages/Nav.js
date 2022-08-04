import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const linkStyles = {
    textDecoration: "none",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px",
    color: "black",
  };

  const renderNav = (
    <ul>
      <li>
        <NavLink to="/login" exact style={linkStyles}>
          Login
        </NavLink>
      </li>
      <li>
        <NavLink to="/words" exact style={linkStyles}>
          Word Lists
        </NavLink>
      </li>
      <li>
        <NavLink to="/lists" exact style={linkStyles}>
          Missing a Word?
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header>
      <nav className="wrapper">
        <NavLink to="/" exact style={linkStyles}>
          Word-Me!
        </NavLink>

        {renderNav}
      </nav>
    </header>
  );
}

export default Nav;
