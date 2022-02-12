import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="https://i.imgur.com/V1ZisGC.png" alt="a stick figure" />{" "}
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

export default Navbar;
