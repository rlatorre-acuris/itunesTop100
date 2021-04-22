import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import "./Refresh.css";

const Refresh = ({ onClick }) => (
  <div className="refresh-button" onClick={onClick} title="Click to refresh">
    <FontAwesomeIcon icon={faSyncAlt} />
  </div>
);

export default Refresh;
