import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav style={{ display: "flex", width: "100%", gap: "10px" }}>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "color-red" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive, isPending }) =>
            isActive ? "color-red" : ""
          }
        >
          Cart
        </NavLink>
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) =>
            isActive ? "color-red" : ""
          }
        >
          Login
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
