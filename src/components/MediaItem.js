import "./MediaItem.css";

const MediaItem = ({ name, link, image, artist, album, isAlbum }) => (
  <div className="media-item">
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      title={`See ${isAlbum ? "Album" : "Song"} details on iTunes`}
    >
      <div className="media-item-cover">
        <img
          className="media-item-image"
          src={image}
          alt={`${isAlbum ? "Album" : "Song"} cover`}
        />
      </div>
    </a>
    <div className="media-item-name">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        title={`See ${isAlbum ? "Album" : "Song"} details on iTunes`}
      >
        {name}
      </a>
    </div>
    <div className="media-item-artist">
      <a
        href={artist.link}
        target="_blank"
        rel="noreferrer"
        title="See Artist details on iTunes"
      >
        {artist.name}
      </a>
    </div>
    {!isAlbum && (
      <div className="media-item-album">
        <a
          href={album.link}
          target="_blank"
          rel="noreferrer"
          title="See Album details on iTunes"
        >
          {album.name}
        </a>
      </div>
    )}
  </div>
);

export default MediaItem;
