import { Link } from "react-router-dom";
import icon from "../../images/transparent-icon.png"
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={icon} alt="a stick figure" />{" "}
      </Link>
      <ul>
        <Link to="/random">
          <li>Random</li>
        </Link>
        <Link to="/search">
          <li>Search</li>
        </Link>
        <Link to="/bio">
          <li>Bio</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
