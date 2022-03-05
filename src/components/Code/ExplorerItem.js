import React from "react";
import {
  FaAngleDown,
  FaArrowDown,
  FaFileAlt,
  FaFolder,
  FaQuestion,
} from "react-icons/fa";

const ExplorerItem = ({ title, type, selected, onOpen }) => {
  return (
    <li
      onClick={(e) => {
        onOpen();

        const state = e.target.classList.contains("selected");
        document.querySelectorAll(".Explorer-list > li").forEach((element) => {
          element.classList.remove("selected");
        });
        if (state) e.target.classList.remove("selected");
        else e.target.classList.add("selected");
      }}
      className={selected ? "selected" : null}
    >
      {type === "file" ? (
        <FaFileAlt color="dodgerblue" />
      ) : type === "folder" ? (
        <span>
          <FaAngleDown
            color="dodgerblue"
            style={{
              marginRight: 5,
            }}
          />
          <FaFolder color="dodgerblue" />
        </span>
      ) : (
        <FaQuestion color="dodgerblue" />
      )}
      {title}
    </li>
  );
};

export default ExplorerItem;
