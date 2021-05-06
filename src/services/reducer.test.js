import songs from "../fakes/songs.json";
import reducer from "./reducer";

const initialState = {
  activePage: "albums",
  filter: "",
  loading: true,
  error: false,
  albums: [],
  songs: [],
};

test("LOAD_SONGS", () => {
  const newState = reducer(initialState, {
    type: "LOAD_SONGS",
    payload: songs,
  });
  expect(newState.loading).toBe(false);
  expect(newState.songs[0]).toEqual({
    name: "The Good Ones",
    link:
      "https://music.apple.com/us/album/the-good-ones/1510409258?i=1510409277&uo=2",
    image:
      "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/4c/24/a3/4c24a36c-cbba-2c19-86ed-1b2df12e8730/093624893301.jpg/170x170bb.png",
    artist: {
      name: "Gabby Barrett",
      link: "https://music.apple.com/us/artist/gabby-barrett/623856508?uo=2",
    },
    album: {
      name: "Goldmine",
      link: "https://music.apple.com/us/album/goldmine/1510409258?uo=2",
    },
  });
});
