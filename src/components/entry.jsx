export default function Entry(Props) {
  return (
    <>
      <article className="journal-entry">
        <div className="main-image-container">
          <img
            className="main-image"
            src={Props.entry.img.src}
            alt={Props.entry.img.alt}
          />
        </div>
        <div className="info-container">
          <img className="marker" src="./src/marker.png" alt="globe" />
          <span className="country">{Props.entry.country}</span>
          <a href={Props.entry.googleMapsLink}>View on the map</a>
          <h2 className="entry-title">{Props.entry.title}</h2>
          <p className="trip-dates">{Props.entry.dates}</p>
          <p className="entry-text">{Props.entry.text}</p>
        </div>
      </article>
    </>
  );
}
