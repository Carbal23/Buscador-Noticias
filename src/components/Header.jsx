import React from "react";

export const Header = ({ title }) => {
  return (
    <nav className="nav-wrapper light-blue darken-3">
      <a href="#!" className="brand-logo center">
        {title}{" "}
      </a>
    </nav>
  );
};
