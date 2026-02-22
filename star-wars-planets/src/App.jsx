import { useEffect, useState } from "react";

export default function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://swapi.info/api/starships/");
        const data = await response.json();
        setStarships(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10">
      <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-12 drop-shadow-lg">
        🚀 Starships
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {starships.map((ship) => (
          <div
            key={ship.url}
            className="
              bg-gray-800/80 backdrop-blur
              p-6 rounded-2xl
              shadow-xl
              border border-gray-700
              hover:scale-105
              hover:border-yellow-400
              hover:shadow-yellow-400/30
              transition-all duration-300
              text-white
            "
          >
            <h2 className="text-2xl font-bold mb-3 text-yellow-300">
              {ship.name}
            </h2>

            <div className="space-y-2 text-gray-300">
              <p>
                <span className="text-white font-semibold">Model:</span>{" "}
                {ship.model}
              </p>

              <p>
                <span className="text-white font-semibold">Manufacturer:</span>{" "}
                {ship.manufacturer}
              </p>

              <p>
                <span className="text-white font-semibold">Crew:</span>{" "}
                {ship.crew}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
