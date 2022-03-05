import React, { useContext } from "react";

import "../styles/Container.css";
import CodeEditor from "./Code/CodeEditor";

import { AppContext } from "../Helper/Context";
import WelcomeHolder from "./WelcomeHolder";
import SideBar from "./Code/SideBar";
import Explorer from "./Code/Explorer";

const Container = () => {
  const { file, currentFile } = useContext(AppContext);

  return (
    <div className="container">
      <SideBar current={"explorer"}>
        <Explorer key={"explorer"} />
      </SideBar>
      {file && currentFile ? <CodeEditor /> : <WelcomeHolder />}
    </div>
  );
};

export default Container;
