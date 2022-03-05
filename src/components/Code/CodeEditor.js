import React, { useContext, useEffect, useState } from "react";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { githubLight } from "@ddietr/codemirror-themes/theme/github-light";
import { githubDark } from "@ddietr/codemirror-themes/theme/github-dark";

import "../../styles/AdlemasEditor.css";

import { AppContext } from "../../Helper/Context";

const CodeEditor = () => {
  const { theme, currentFile } = useContext(AppContext);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (currentFile) {
      setValue(currentFile.content);
    }
  }, [currentFile]);

  return (
    <div className="AdlemasEditor">
      <CodeMirror
        value={value}
        theme={theme == "dark" ? githubDark : githubLight}
        height="100%"
        extensions={[javascript({ jsx: true })]}
        onChange={(value, viewUpdate) => {
          setValue(value);
        }}
      />
    </div>
  );
};

export default CodeEditor;
