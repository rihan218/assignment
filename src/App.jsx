import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import DataFromApi from "./components/DataFromApi";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.results);
        if (data.results.length > 0) {
          const firstEpisode = data.results[0];
          setSelectedEpisode(firstEpisode);
          fetchCharacters(firstEpisode.characters);
        }
      });
  }, []);

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
    fetchCharacters(episode.characters);
  };

  const fetchCharacters = (characterUrls) => {
    const characterIds = characterUrls
      .map((url) => url.split("/").pop())
      .join(",");
    fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
      .then((res) => res.json())
      .then((data) => setCharacters(Array.isArray(data) ? data : [data]));
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row h-screen ">
        <Sidebar
          episodes={episodes}
          selectedEpisode={selectedEpisode}
          onSelectEpisode={handleSelectEpisode}
        />
        <DataFromApi characters={characters} />
      </div>
    </>
  );
}

export default App;
