import React, { useEffect } from "react";

import "../styles/WelcomeHolder.css";
import { FaFile, FaFileImport, FaFolderOpen } from "react-icons/fa";

const WelcomeHolder = () => {
  return (
    <div className="welcomeHolder">
      <h1 className="holderTitle">Welcome to Adlemas Editor.</h1>
      <ul className="holderTools">
        <li>
          <FaFile />
          <p
            onClick={(e) => {
              window.electron.fileApi.createFile();
            }}
          >
            Create New File
          </p>
        </li>
        <li>
          <FaFileImport />
          <p
            onClick={(e) => {
              window.electron.fileApi.open("file");
            }}
          >
            Open File (Upload)
          </p>
        </li>
        <li>
          <FaFolderOpen />
          <p
            onClick={(e) => {
              window.electron.fileApi.open("directory");
            }}
          >
            Open Folder
          </p>
        </li>
      </ul>
    </div>
  );
};

export default WelcomeHolder;
