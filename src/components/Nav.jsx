import { NavLink } from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <NavLink to="/" className="navitem">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/games" className="navitem">
            Games
          </NavLink>
        </li>
        <li>
          <NavLink to="/art" className="navitem">
            Art
          </NavLink>
        </li>
        <li style={{float: 'right'}}>
          <NavLink to="/contact" className="navitem">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;