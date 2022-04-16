import React from "react";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="text-2xl text-yellow-600 font-logo">
      <NavLink to="/">Airlines</NavLink>
    </div>
  );
}

export default Logo;
