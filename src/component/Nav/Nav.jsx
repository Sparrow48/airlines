import React from "react";

import { NavLink } from "react-router-dom";

import Logo from "./Logo";

function Nav() {
  return (
    <div className="border-b ">
      <div className="justify-between hidden py-5 mx-12 text-gray-600 pt-7 lg:flex ">
        <div>
          <Logo />
        </div>
        <div className="flex space-x-8 ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/allPassenger">Passenger List</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
