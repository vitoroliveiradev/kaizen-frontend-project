import styles from "./Navbar.module.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";

import { motion } from "framer-motion";

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
          <motion.ul
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: 300 }}
            className={showMenu == true ? styles.showList : ""}
          >
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
              <NavLink to="/qualities">Ferramentas</NavLink>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <NavLink to="/contact">Contato</NavLink>
            </li>
          </motion.ul>
          <button className={styles.btnMenu} onClick={() => setShowMenu(true)}>
            <CiMenuFries />
          </button>
        </div>
      </nav>
    </header>
  );
};
