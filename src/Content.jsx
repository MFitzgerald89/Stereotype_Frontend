import axios from "axios";
import { Home } from "./Home";
import { About } from "./About";
import { UserShow } from "./UserShow";
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

  // const [photos, setPhotos] = useState([]);
  // const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
  // const [currentPhoto, setCurrentPhoto] = useState({});

  // const handleIndexPhotos = () => {
  //   console.log("handleIndexPhotos");
  //   axios.get("http://localhost:3000/photos.json").then(response => {
  //     console.log(response.data);
  //     setPhotos(response.data);
  //   });
  // };

  // const handleShowPhoto = photo => {
  //   console.log("handleShowPhoto", photo);
  //   setIsPhotosShowVisible(true);
  //   setCurrentPhoto(photo);
  // };

  // const handleClose = () => {
  //   console.log("handleClose");
  //   setIsPhotosShowVisible(false);
  // };

  // useEffect(handleIndexPhotos, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UserShow users={users} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logoutlink" element={<LogoutLink />} />
      </Routes>
    </div>
  );
}
