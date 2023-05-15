import axios from "axios";
import { useState, useEffect } from "react";
import "./Signup.scoped.scss";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [uploadImages, setUploadImages] = useState([]);
  const [gender, setGender] = useState("");

  const handleUploadImages = event => {
    if (event.target.files.length > 0) {
      setUploadImages(event.target.files[0]);
    }
  };

  const handleGenres = event => {
    console.log(event.target.value);
    if (genres.length < 5) {
      setGenres([...genres, event.target.value]);
    }
  };

  const handleRemoveGenre = genre => {
    console.log(genre);
    setGenres(genres.filter(g => genre !== g));
  };
  const handlePageSwitch = () => {
    const element = document.getElementById("signup");
    element.scrollIntoView();
  };

  useEffect(handlePageSwitch, []);

  const handleGenderChange = event => {
    setGender(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    params.append("genres", genres);
    params.append("photos", uploadImages);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(response => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(error => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="first_name" type="text" className="form-control" placeholder="first name" />
        </div>
        <div>
          <input name="last_name" type="text" className="form-control" placeholder="last name" />
        </div>
        <div>
          <input name="email" type="email" className="form-control" placeholder="email" />
        </div>
        <div>
          <input name="age" type="number" className="form-control" placeholder="age" />
        </div>
        <div>
          <label>
            <input type="radio" value="male" checked={gender === "male"} onChange={handleGenderChange} />
            Male
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="female" checked={gender === "female"} onChange={handleGenderChange} />
            Female
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="trans" checked={gender === "trans"} onChange={handleGenderChange} />
            Trans
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="nonbinary" checked={gender === "nonbinary"} onChange={handleGenderChange} />
            Nonbinary
          </label>
        </div>
        <div>
          <input name="orientation" type="text" className="form-control" placeholder="orientation" />
        </div>
        <div>
          <input
            name="preferred orientation"
            type="text"
            className="form-control"
            placeholder="preferred orientation"
          />
        </div>
        <div>
          <input name="religion" type="text" className="form-control" placeholder="religion" />
        </div>
        <div>
          <input name="location" type="text" className="form-control" placeholder="location" />
        </div>
        <div className="genre" placeholder="Genre">
          <select name="genre" id="genre" placeholder="Genre" onChange={() => handleGenres(event)}>
            <option value="" disabled selected hidden>
              --Pick Genres--
            </option>
            <option value="rock">Rock</option>
            <option value="country">Country</option>
            <option value="jazz">Jazz</option>
            <option value="pop">Pop</option>
            <option value="classical">Classical</option>
            <option value="math rock">Math Rock</option>
          </select>
          <div>
            {genres.length > 0 ? (
              genres.map(genre => (
                <div key={genre}>
                  <p>
                    {genre}
                    <span onClick={() => handleRemoveGenre(genre)}> &#x2715; </span>
                  </p>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          Upload Photo:
          <input name="photos" id="photos" type="file" onChange={() => handleUploadImages(event)}></input>
        </div>
        <div>
          <input name="password" type="password" className="form-control" placeholder="Password" />
        </div>
        <div>
          <input name="password_confirmation" type="password" className="form-control" placeholder="Confirm Password" />
        </div>
        <button id="button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
