import { useState } from "react";
import AllHobbies from "./components/AllHobbies";

function App() {
  const [hobby, setHobby] = useState("");
  const [allHobbies, setAllHobbies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const saveHobby = () => {
    if (!hobby.trim()) return;
    setAllHobbies([...allHobbies, hobby]);
    setHobby("");
  };

  const toggleFavourite = (hobbyText) => {
    if (favourites.includes(hobbyText)) {
      setFavourites(favourites.filter((fav) => fav !== hobbyText));
    } else {
      setFavourites([...favourites, hobbyText]);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Hobbies</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a hobby..."
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <button onClick={saveHobby}>Save</button>
      </div>

      <AllHobbies
        hobbies={allHobbies}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />

      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "10px" }}>
        <h2>Favourite Hobbies</h2>
        {favourites.length === 0 ? (
          <p>No favourite hobbies yet</p>
        ) : (
          favourites.map((hobby, index) => <div key={index}>{hobby}</div>)
        )}
      </div>
    </div>
  );
}

export default App;
