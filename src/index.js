import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const celebrityArtists = [
  {
    artistName: "Beyoncé",
    dateOfBirth: "September 4, 1981",
    nationality: "American",
    genre: "R&B, Pop",
    yearsActive: "1997-present",
    photoSrc: "Beyoncé.jpg",
  },
  {
    artistName: "Ed Sheeran",
    dateOfBirth: "February 17, 1991",
    nationality: "British",
    genre: "Pop, Folk, R&B",
    yearsActive: "2004-present",
    photoSrc: "Ed Sheeran.png",
  },
  {
    artistName: "Taylor Swift",
    dateOfBirth: "December 13, 1989",
    nationality: "American",
    genre: "Pop, Country, Folk",
    yearsActive: "2004-present",
    photoSrc: "Taylor Swift.png",
  },
  {
    artistName: "Drake",
    dateOfBirth: "October 24, 1986",
    nationality: "Canadian",
    genre: "Hip-Hop, R&B",
    yearsActive: "2001-present",
    photoSrc: "Drake.png",
  },
  {
    artistName: "Justin Bieber",
    dateOfBirth: "March 1, 1994",
    nationality: "Canadian",
    genre: "Pop, R&B",
    yearsActive: "2008-present",
    photoSrc: "Justin Bieber.png",
  },
  {
    artistName: "Ariana Grande",
    dateOfBirth: "June 26, 1993",
    nationality: "American",
    genre: "Pop, R&B",
    yearsActive: "2008-present",
    photoSrc: "Ariana Grande.png",
  },
  {
    artistName: "Adele",
    dateOfBirth: "May 5, 1988",
    nationality: "British",
    genre: "Pop, Soul",
    yearsActive: "2006-present",
    photoSrc: "Adele.png",
  },
  {
    artistName: "Rihanna",
    dateOfBirth: "February 20, 1988",
    nationality: "Barbadian",
    genre: "R&B, Pop, Dancehall",
    yearsActive: "2003-present",
    photoSrc: "Rihanna.png",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Artist Catalogue</h1>
    </header>
  );
}

function Main() {
  return (
    <main className="main-container">
      <h2>
        Unveiling the Stars: Meet the Spectacular Celebrities Shaping the
        Entertainment World!
      </h2>
      <ul className="artist-catalogue">
        {celebrityArtists.map((artist) => (
          <Artist artistData={artist} key={artist.artistName} />
        ))}
      </ul>
    </main>
  );
}

function Artist({ artistData }) {
  return (
    <div className="artist-container">
      <div className="image-container">
        <img
          src={artistData.photoSrc}
          alt={artistData.artistName}
          draggable="false"
        />
      </div>
      <div>
        <h3>{artistData.artistName}</h3>
        <p>{artistData.dateOfBirth}</p>
        <p>{artistData.nationality}</p>
        <p>{artistData.genre}</p>
        <p>{artistData.yearsActive}</p>
      </div>
    </div>
  );
}
