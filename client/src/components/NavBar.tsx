import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";
import { CgShoppingCart } from "react-icons/cg";
import { GiGuitarBassHead } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";

export default function Navbar(): JSX.Element {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img className="logo" src="./assets/logo-guitar.png" alt="chen" />
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <NavLink to="/">
              {" "}
              <AiOutlineHome />
              &nbsp; עמוד הבית
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <GiGuitarBassHead />
              &nbsp; מוצרים
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <CgShoppingCart />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
