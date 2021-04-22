import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Filter.css";

const Filter = ({ text, onChange, onCancel }) => (
  <div className="filter">
    <div className="filter-icon">
      <FontAwesomeIcon icon={faSearch} />
    </div>
    <input
      type="text"
      className="filter-input"
      placeholder="Filter"
      onChange={onChange}
      value={text}
    />
    {text && (
      <div className="filter-cancel" onClick={onCancel}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
    )}
  </div>
);

export default Filter;
