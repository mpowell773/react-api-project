import { Link } from "react-router-dom";
import icon from "../../images/transparent-icon.png"
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/react-api-project">
        <img src={icon} alt="a stick figure" />{" "}
      </Link>
      <ul>
        <Link to="/react-api-project/random">
          <li>Random</li>
        </Link>
        <Link to="/react-api-project/search">
          <li>Search</li>
        </Link>
        <Link to="/react-api-project/bio">
          <li>Bio</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
