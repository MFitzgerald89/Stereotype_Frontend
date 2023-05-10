import axios from "axios";
import "./App.scoped.scss";
export function Header() {
  const handleClick = event => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
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
      </nav>
    </header>
  );
}
