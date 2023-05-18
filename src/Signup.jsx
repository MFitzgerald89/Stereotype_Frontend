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
        <div className="first_four">
          <input name="first_name" type="text" className="form-control" placeholder="first name" />
        </div>
        <div className="first_four">
          <input name="last_name" type="text" className="form-control" placeholder="last name" />
        </div>
        <div className="first_four">
          <input name="email" type="email" className="form-control" placeholder="email" />
        </div>
        <div className="first_four">
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
          <select name="genre" id="genre" onChange={() => handleGenres(event)}>
            <option defaultValue="">--Pick Genres--</option>
            <option value="a_cappella">A cappella</option>
            <option value="acoustic">Acoustic</option>
            <option value="adult_Contemporary">Adult Contemporary</option>
            <option value="alternative">Alternative</option>
            <option value="bebop">Bebop</option>
            <option value="big_band">Big Band</option>
            <option value="blues">Blues</option>
            <option value="celtic">Celtic</option>
            <option value="christian">Christian</option>
            <option value="classical">Classical</option>
            <option value="classic_rock">Classic Rock</option>
            <option value="country">Country</option>
            <option value="dance">Dance</option>
            <option value="death_core">Death Core</option>
            <option value="disco">Disco</option>
            <option value="doo-wop">Doo-Wop</option>
            <option value="dubstep">DubStep</option>
            <option value="electronic">Electronic</option>
            <option value="emo">Emo</option>
            <option value="experimental">Experimental</option>
            <option value="folk">Folk</option>
            <option value="funk">Funk</option>
            <option value="gospel">Gospel</option>
            <option value="hiphop">Hip Hop</option>
            <option value="house">House</option>
            <option value="indie_folk">Indie Folk</option>
            <option value="instrumental">Instrumental</option>
            <option value="jpop">J-Pop</option>
            <option value="jazz">Jazz</option>
            <option value="jewish">Jewish</option>
            <option value="kpop">K-Pop</option>
            <option value="latin">Latin</option>
            <option value="math_rock">Math Rock</option>
            <option value="metal">Metal</option>
            <option value="new_wave">New Wave</option>
            <option value="opera">Opera</option>
            <option value="orchestra">Orchestra</option>
            <option value="pop">Pop</option>
            <option value="praise">Praise</option>
            <option value="progressive">Progressive</option>
            <option value="psychadelic">Psychadelic</option>
            <option value="punk">Punk</option>
            <option value="rap">Rap</option>
            <option value="reggae">Reggae</option>
            <option value="r&b">R & B</option>
            <option value="rock">Rock</option>
            <option value="salsa">Salsa</option>
            <option value="sea_shanty">Sea Shanty</option>
            <option value="ska">Ska</option>
            <option value="soul">Soul</option>
            <option value="swing">Swing</option>
            <option value="symphony">Symphony</option>
            <option value="synthwave">Synthwave</option>
            <option value="techno">Techno</option>
            <option value="trap">Trap</option>
            <option value="underground">Underground</option>
            <option value="waltz">Waltz</option>
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
