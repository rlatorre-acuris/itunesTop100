const ENDPOINT = {
  songs: "https://itunes.apple.com/us/rss/topsongs/limit=100/json",
  albums: "https://itunes.apple.com/us/rss/topalbums/limit=100/json",
};

const getFeed = async (type) => {
  try {
    const response = await fetch(ENDPOINT[type]);
    if (!response.ok)
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error while trying to fetch from feed.", err.message);
    throw err;
  }
};

export default getFeed;
