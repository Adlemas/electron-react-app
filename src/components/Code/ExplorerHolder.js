import React from "react";

const ExplorerHolder = () => {
  return (
    <div className="ExplorerHolder">
      <button
        onClick={(e) => {
          window.electron.fileApi.open("directory");
        }}
      >
        Open Folder
      </button>
      <small>You can open folder and program your project!</small>

      <button
        onClick={(e) => {
          window.electron.fileApi.open("file");
        }}
      >
        Open File
      </button>
      <small>You can open file and program single file!</small>
    </div>
  );
};

export default ExplorerHolder;
