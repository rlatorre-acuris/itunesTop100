const reducer = (state, { type, payload }) => {
  let entries;
  switch (type) {
    case "LOAD_ALBUMS":
      ({ feed: { entry: entries } = {} } = payload);
      if (!entries || !Array.isArray(entries) || !entries.length)
        return {
          ...state,
          loading: false,
        };
      return {
        ...state,
        loading: false,
        albums: entries.map(
          ({
            "im:name": { label: name } = {},
            link: { attributes: { href: link } = {} } = {},
            "im:image": [img55, img60, { label: image } = {}] = [],
            "im:artist": {
              label: artistName,
              attributes: { href: artistLink } = {},
            } = {},
          } = {}) => ({
            name,
            link,
            image,
            artist: {
              name: artistName,
              link: artistLink,
            },
          })
        ),
      };
    case "LOAD_SONGS":
      ({ feed: { entry: entries } = {} } = payload);
      console.log("ENTRIES", entries);
      if (!entries || !Array.isArray(entries) || !entries.length)
        return {
          ...state,
          loading: false,
        };
      return {
        ...state,
        loading: false,
        songs: entries.map(
          ({
            "im:name": { label: name } = {},
            link: { attributes: { href: link } = {} } = {},
            "im:image": [img55, img60, { label: image } = {}] = [],
            "im:artist": {
              label: artistName,
              attributes: { href: artistLink } = {},
            } = {},
            "im:collection": {
              "im:name": { label: albumName } = {},
              link: { attributes: { href: albumLink } = {} } = {},
            } = {},
          } = {}) => ({
            name,
            link,
            image,
            artist: {
              name: artistName,
              link: artistLink,
            },
            album: {
              name: albumName,
              link: albumLink,
            },
          })
        ),
      };
    case "SET_LOADER":
      return {
        ...state,
        loading: true,
      };
    case "SET_PAGE":
      return {
        ...state,
        activePage: payload,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
