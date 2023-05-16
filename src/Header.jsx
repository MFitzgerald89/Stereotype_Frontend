import axios from "axios";
import "./App.scoped.scss";
export function Header() {
  const handleClick = event => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  };

  const handleHome = event => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <header>
      <nav>
        <button className="log-out-button">
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </button>
        <button className="home-button" type="button" class="btn btn-link">
          <a href="#" onClick={handleHome}>
            Home
          </a>
        </button>
      </nav>
    </header>
  );
}
