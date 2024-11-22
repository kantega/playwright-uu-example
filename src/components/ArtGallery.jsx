import React, { useState } from "react";
import artData from "../art.json";

const ArtGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrering basert på søk
  const filteredArt = artData.filter(
    (art) =>
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <img src="/images/ai-art.png" alt="" style={{ width: "200px" }} />
      <input
        type="text"
        placeholder="Søk etter kunst..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {filteredArt.map((art) => (
          <div
            key={art.id}
            style={{
              backgroundColor: "#f3f1f1",
              borderRadius: "10px",
              padding: "10px",
              maxWidth: "300px",
              textAlign: "center",
            }}
          >
            <img
              src={art.image}
              alt="Bilde"
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h4 style={{ fontWeight: 400 }}>{art.title}</h4>
          </div>
        ))}
        {filteredArt.length === 0 && (
          <p>Fant ingen bilder som passet til søk</p>
        )}
      </div>
    </div>
  );
};

export default ArtGallery;
