import styles from "./Navbar.module.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header id={styles.header}>
      <nav>
        <div className={styles.left}>
          <NavLink to="/">
            <h2>
              <span>Io</span>System.
            </h2>
          </NavLink>
        </div>
        <div className={styles.right}>
          <ul className={showMenu == true ? styles.showList : ""}>
            <button
              className={styles.btnClose}
              onClick={() => setShowMenu(false)}
            >
              X
            </button>
            <li onClick={() => setShowMenu(false)}>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <NavLink to="/contact">Contato</NavLink>
            </li>
          </ul>
          <button className={styles.btnMenu} onClick={() => setShowMenu(true)}>
            <CiMenuFries />
          </button>
        </div>
      </nav>
    </header>
  );
};
