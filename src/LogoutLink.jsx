import axios from "axios";

export function LogoutLink() {
  const handleClick = event => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <button>
      <nav className="navbar navbar-light bg-light">
        <a href="#" class="navbar-brand" onClick={handleClick}>
          Logout
        </a>
      </nav>
    </button>
  );
}
