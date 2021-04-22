import { useState, useReducer } from "react";

import "./App.css";
import MediaItem from "./MediaItem";
import Menu from "./Menu";
import Filter from "./Filter";
import Spinner from "./Spinner";
import Refresh from "./Refresh";

function App() {
  const [filter, setFilter] = useState("");
  const onFilterChange = ({ target: { value } = {} } = {}) => setFilter(value);
  const onFilterReset = () => setFilter("");
  const [state, dispatch] = useReducer((state, action) => state, {
    activePage: "albums",
    filter: "",
    loading: true,
    artists: {
      lookup: {},
    },
    albums: {
      lookup: {},
      list: [],
    },
    songs: {
      lookup: {},
      list: [],
    },
  });
  return (
    <div className="App">
      <header>
        <div className="titleRow">
          <h1>iTunes Top 100</h1>
          <Refresh onClick={() => null} />
        </div>
        <Filter
          text={filter}
          onChange={onFilterChange}
          onCancel={onFilterReset}
        />
        <hr className="separator" />
      </header>
      <div className="body">
        <div className="menubar">
          <Menu activeId="albums" onSelect={() => null} />
        </div>
        <div className="content">
          <MediaItem
            name="My Savior"
            link="https://music.apple.com/us/album/my-savior/1551855429?uo=2"
            image="https://is2-ssl.mzstatic.com/image/thumb/Music114/v4/c2/6b/78/c26b783d-6a56-b182-e367-d9035dda3c78/21UMGIM00560.rgb.jpg/170x170bb.png"
            artist={{
              name: "Carrie Underwood",
              link:
                "https://music.apple.com/us/artist/carrie-underwood/63399334?uo=2",
            }}
            isAlbum={true}
          />
          <Spinner />
        </div>
      </div>
    </div>
  );
}

export default App;
