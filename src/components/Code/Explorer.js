import React, { useContext, useState } from "react";
import { FaRegFile, FaRegFolder, FaRetweet } from "react-icons/fa";

import { AppContext } from "../../Helper/Context";

import "../../styles/Explorer.css";
import ExplorerAddItem from "./ExplorerAddItem";
import ExplorerHolder from "./ExplorerHolder";
import ExplorerItem from "./ExplorerItem";

const Explorer = () => {
  const { file } = useContext(AppContext);
  const [creatingFile, setCreatingFile] = useState(false);
  const [creatingFolder, setCreatingFolder] = useState(false);

  return (
    <div className="Explorer">
      {file?.foldername ? (
        <span className="Explorer-bar">
          <h4>{file.foldername.toUpperCase()}</h4>
          <nav>
            <ul>
              <li
                title="New File"
                onClick={(e) => {
                  setCreatingFile(true);
                  setTimeout(() => {
                    document.getElementById("addItemInput").focus();
                  }, 200);
                }}
              >
                <FaRegFile />
              </li>
              <li
                title="New Folder"
                onClick={(e) => {
                  setCreatingFolder(true);
                }}
              >
                <FaRegFolder />
              </li>
              <li title="Reload Explorer">
                <FaRetweet />
              </li>
            </ul>
          </nav>
        </span>
      ) : null}
      <ul className="Explorer-list">
        {file ? (
          file.files ? (
            file.files.map((cfile, index) => {
              console.log(cfile);
              return (
                <ExplorerItem
                  key={index}
                  selected={cfile.selected}
                  type={cfile.type}
                  title={cfile.name}
                  onOpen={() => {
                    window.electron.fileApi.readFile(
                      file.filepath || file.folderpath,
                      cfile.name
                    );
                  }}
                />
              );
            })
          ) : file.filename ? (
            <ExplorerItem
              selected={file.selected}
              key={file.filename}
              type={file.type}
              title={file.filename}
              onOpen={() => {
                window.electron.fileApi.readFile(
                  file.filepath || file.folderpath,
                  file.filename
                );
              }}
            />
          ) : (
            <ExplorerHolder />
          )
        ) : (
          <ExplorerHolder />
        )}

        {creatingFile ? (
          <ExplorerAddItem
            type={"file"}
            onEnd={(title) => {
              window.electron.fileApi.addFile(
                file.filepath || file.folderpath,
                title
              );
              setCreatingFile(false);
            }}
          />
        ) : null}
      </ul>
    </div>
  );
};

export default Explorer;
