import React from "react";

const Logo = ({ width = null }) => {
  return (
    <img
      src="/logo.png"
      className="header__logo"
      width={width ? width.toString() : "30"}
      height={width ? width.toString() : "30"}
    />
  );
};

export default Logo;
