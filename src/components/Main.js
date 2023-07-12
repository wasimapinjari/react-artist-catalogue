import Artist from "./Artist.js";
import celebrityArtists from "../data/celebrityArtists.js";

export default function Main() {
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