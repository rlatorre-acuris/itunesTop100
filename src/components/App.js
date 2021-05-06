import { useEffect, useReducer } from "react";

import "./App.css";
import MediaItem from "./MediaItem";
import Menu from "./Menu";
import Filter from "./Filter";
import Spinner from "./Spinner";
import Refresh from "./Refresh";
import reducer from "../services/reducer";
import getFeed from "../services/feeds";
import { filterItems } from "../services/selectors";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    activePage: "albums",
    filter: "",
    loading: true,
    error: false,
    albums: [],
    songs: [],
  });
  const { activePage, filter, loading, error } = state;
  const isAlbum = activePage === "albums";
  const items = filterItems(state);

  const refresh = async () => {
    dispatch({ type: "SET_LOADER" });
    try {
      const payload = await getFeed(activePage);
      dispatch({ type: `LOAD_${activePage.toUpperCase()}`, payload });
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: true });
    }
  };
  const setFilter = ({ target: { value } = {} } = {}) =>
    dispatch({ type: "SET_FILTER", payload: value });
  const resetFilter = () => dispatch({ type: "SET_FILTER", payload: "" });
  const resetError = () => dispatch({ type: "SET_ERROR", payload: false });
  const setPage = (id) => {
    dispatch({ type: "SET_PAGE", payload: id });
    refresh();
  };
  useEffect(() => {
    refresh();
  }, []);
  return (
    <div className="App">
      <header>
        <div className="titleRow">
          <h1>iTunes Top 100</h1>
          <Refresh onClick={refresh} />
        </div>
        <Filter text={filter} onChange={setFilter} onCancel={resetFilter} />
        <hr className="separator" />
      </header>
      <div className="body">
        <div className="menubar">
          <Menu activeId={activePage} onSelect={setPage} />
        </div>
        <div className="content">
          {!loading &&
            items.map((item, index) => (
              <MediaItem key={index} {...item} isAlbum={isAlbum} />
            ))}
          {loading && <Spinner />}
        </div>
      </div>
    </div>
  );
}

export default App;
