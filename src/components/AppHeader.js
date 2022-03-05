import React, { useContext } from "react";
import { FaEllipsisH } from "react-icons/fa";

import { AppContext } from "../Helper/Context";
import Logo from "./Logo";

function AppHeader() {
  const { title, setTitle, toggleTheme, theme } = useContext(AppContext);

  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        <nav className="header__nav">
          <ul>
            <li
              onClick={() => {
                setTitle("File - Adlemas Editor");
              }}
            >
              File
            </li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li
              onClick={(e) => {
                toggleTheme();
              }}
            >
              {theme === "dark" ? "Light Theme" : "Dark Theme"}
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__center">
        <p className="header__status">{title}</p>
      </div>
      <div className="header__right">
        <FaEllipsisH />
      </div>
    </header>
  );
}

export default AppHeader;
