import "./Header.scoped.scss";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/matches">matches</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/signup">sign up</Link>
        </li>
        <li>
          <Link to="/login">log in</Link>
        </li>
      </ul>
    </header>
  );
}
