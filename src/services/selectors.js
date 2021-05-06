const filterItems = ({ activePage, filter, albums, songs }) => {
  const items = activePage === "songs" ? songs : albums;
  return items.filter((item) => {
    if (!filter) return true;
    const re = new RegExp(`\\b${filter}`, "i");
    return (
      re.test(item.name) ||
      re.test(item.artist.name) ||
      (Boolean(item.album) && re.test(item.album.name))
    );
  });
};

export { filterItems };
