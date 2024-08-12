import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <NavLink to="/" exact="true">
        Home
      </NavLink>
      <NavLink to="/my-bots" exact="true">
        My Bots
      </NavLink>
    </nav>
  );
};

export default Navbar;
