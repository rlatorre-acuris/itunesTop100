import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MenuItem.css";

const MenuItem = ({ id, label, activeId, icon, onSelect }) => {
  const onClick = () => onSelect(id);
  return (
    <div
      className={`menu-item${id === activeId ? " menu-item-active" : ""}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />{" "}
      <span className="menu-item-label">{label}</span>
    </div>
  );
};

export default MenuItem;
