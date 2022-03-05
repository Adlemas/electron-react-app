import React, { useEffect } from "react";

import "../../styles/SideBar.css";

import { FaEllipsisH } from "react-icons/fa";

const SideBar = ({ current, children }) => {
  useEffect(() => {
    console.log(children);
  }, []);

  return (
    <div className="SideBar">
      <div className="SideBar-title">
        <h4>{current[0].toUpperCase() + current.slice(1)}</h4>
        <span className="SideBar-icon">
          <FaEllipsisH size={15} />
        </span>
      </div>
      <div className="SideBar-content">
        {children
          ? Array.isArray(children)
            ? children.map((child) => {
                console.log(child);
                if (child.key === current) {
                  return child;
                }
              })
            : children.key === current
            ? children
            : null
          : null}
      </div>
    </div>
  );
};

export default SideBar;
