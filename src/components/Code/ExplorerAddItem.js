import React, { useState } from "react";
import { FaAngleDown, FaFileAlt, FaFolder, FaQuestion } from "react-icons/fa";

const ExplorerAddItem = ({ type, onEnd }) => {
  const [title, setTitle] = useState("");

  return (
    <li>
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
      <input
        id="addItemInput"
        style={{
          background: "transparent",
          height: "100%",
          color: "inherit",
          fontSize: 13.5,
          outline: 0,
          border: 0,
        }}
        value={title}
        onInput={(e) => {
          setTitle(e.target.value);
        }}
        onBlur={(e) => {
          document.getElementById("addItemInput").blur();
          onEnd(title);
          setTitle("");
        }}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            document.getElementById("addItemInput").blur();
            onEnd(title);
            setTitle("");
          }
        }}
      />
    </li>
  );
};

export default ExplorerAddItem;
