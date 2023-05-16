import "./Home.scoped.scss";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users" className="page">
            users
          </Link>
        </li>
        <li>
          <Link to="/about" className="page">
            about
          </Link>
        </li>
        <li>
          <Link to="/signup" className="page">
            sign up
          </Link>
        </li>
        <li>
          <Link to="/login" className="page">
            log in
          </Link>
        </li>
      </ul>
    </div>
  );
}
