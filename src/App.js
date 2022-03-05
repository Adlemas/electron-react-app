import React, { useState, useEffect } from "react";
import "./styles/App.css";
import "./styles/Header.css";

import AppHeader from "./components/AppHeader";
import Container from "./components/Container";
import { AppContext } from "./Helper/Context";

function App() {
  const [title, setTitle] = useState("Adlemas Editor");
  const [theme, setTheme] = useState("light");

  const [file, setFile] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);

  useEffect(() => {
    window.electron.fileApi.subscribe({
      openFile: (props) => {
        setFile(props);
      },
      openFolder: (props) => {
        props.files = props.files.sort((a, b) => {
          if (a.type === b.type) return 0;
          else if (a.type == "file") return 1;
          else return -1;
        });
        setFile(props);
      },
      updateFolder(props) {
        console.log(props);
        if (!props || !Array.isArray(props)) return;
        setFile({
          ...file,
          files: props.sort((a, b) => {
            if (a.type === b.type) return 0;
            else if (a.type == "file") return 1;
            else return -1;
          }),
        });
      },
      readFile(props) {
        console.log(props);
        if (!props.filename) return;
        setCurrentFile(props);
      },
    });
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) setTheme("dark");
    else setTheme("light");
  };

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        toggleTheme,
        theme,
        file,
        setFile,
        currentFile,
      }}
    >
      <AppHeader />
      <Container />
    </AppContext.Provider>
  );
}

export default App;
