export default function Artist({ artistData }) {
  return (
    <li className="artist-container">
      <figure className="image-container">
        <img
          src={artistData.photoSrc}
          alt={artistData.artistName}
          draggable="false"
        />
      </figure>
      <div>
        <h3>{artistData.artistName}</h3>
        <p>{artistData.dateOfBirth}</p>
        <p>{artistData.nationality}</p>
        <p>{artistData.genre}</p>
        <p>{artistData.yearsActive}</p>
      </div>
    </li>
  );
}