import { faRecordVinyl, faMusic } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./MenuItem";

import "./Menu.css";

const Menu = ({ activeId, onSelect }) => (
  <nav className="menu">
    <MenuItem
      id="albums"
      label="Albums"
      activeId={activeId}
      icon={faRecordVinyl}
      onSelect={onSelect}
    />
    <MenuItem
      id="songs"
      label="Songs"
      activeId={activeId}
      icon={faMusic}
      onSelect={onSelect}
    />
  </nav>
);

export default Menu;
