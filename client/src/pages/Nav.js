import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Nav.css";

function Nav() {
  const [showtabs, setShowTabs] = useState(false);
  const linkStyles = {
    display: "inline-block",
    padding: "12px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
    <nav>
      <div className="tab-home">
        <NavLink
          to="/"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Word-Me!
        </NavLink>
        <button className="display-tabs" onClick={() => setShowTabs(!showtabs)}>
          {showtabs ? "hide" : "show"}
        </button>
      </div>

      {showtabs && (
        <div className="tabs">
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
      )}
    </nav>
  );
}

export default Nav;
