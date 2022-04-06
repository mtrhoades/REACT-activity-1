// Imports
import "./App.css";
import { useState, useEffect } from "react";
import Gallery from "./components/gallery";
import ButtonBar from "./components/buttonBar";

// Functional Component
export default function App() {
  // vanilla javascript section
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});

  // useEffect section
  useEffect(() => {
    document.title = "Welcome to ArtWorld";
  });

  useEffect(() => {
    // API fetch request
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then((response) => response.json())
      .then((resData) => setData(resData));
  }, [artId]);

  // Helper function
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  // JSX Section
  return (
    <div className='App'>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar handleIterate={handleIterate} />
    </div>
  );
} 