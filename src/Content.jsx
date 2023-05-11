import axios from "axios";
import { Home } from "./Home";
import { About } from "./About";
import { Users } from "./Users";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export function Content() {
  const [users, setUsers] = useState([]);

  const handleIndexUsers = () => {
    console.log("handleIndexusers");
    axios.get("http://localhost:3000/users.json").then(response => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  useEffect(handleIndexUsers, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logoutlink" element={<LogoutLink />} />
      </Routes>
    </div>
  );
}
