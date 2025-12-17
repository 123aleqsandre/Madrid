function AllHobbies({ hobbies, favourites, toggleFavourite }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>All Hobbies</h2>
      {hobbies.length === 0 ? (
        <p>No hobbies yet</p>
      ) : (
        hobbies.map((hobby, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
            <span>{hobby}</span>
            <span
              onClick={() => toggleFavourite(hobby)}
              style={{
                cursor: "pointer",
                marginLeft: "10px",
                color: favourites.includes(hobby) ? "gold" : "gray",
              }}
            >
              {favourites.includes(hobby) ? "★" : "☆"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}

export default AllHobbies;
