import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Collapse } from "bootstrap";
import { FaBars } from "react-icons/fa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();

  const toggleNav = () => {
    const el = document.getElementById("mainNav");
    if (!el) return;
    const bsCollapse = Collapse.getOrCreateInstance(el);
    bsCollapse.toggle();
  };

  const handleNavClick = () => {
    const el = document.getElementById("mainNav");
    if (!el) return;
    if (el.classList.contains("show")) {
      const bsCollapse = Collapse.getOrCreateInstance(el);
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-md py-2 py-md-3 ${styles["bg-nav"]}`}
      aria-label={t("navbar.navbar-aria-label")}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand p-0 m-0 text-decoration-none"
          aria-label={t("navbar.logo-aria-label")}
        >
          <img
            src="/banner-low.jpeg"
            alt="ALCooling logo"
            className={styles.brandLogo}
            decoding="async"
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className={`navbar-toggler ${styles["navbar-toggler-color"]}`}
          type="button"
          aria-controls="mainNav"
          aria-label={t("navbar.navbar-aria-label-toggler")}
          onClick={toggleNav}
        >
          <FaBars className={styles.togglerIcon} aria-hidden="true" />
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 py-2 fs-6 fs-md-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
                onClick={handleNavClick}
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 py-2 fs-6 fs-md-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
                onClick={handleNavClick}
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/knowledge"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 py-2 fs-6 fs-md-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
                onClick={handleNavClick}
              >
                {t("navbar.knowledge")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 py-2 fs-6 fs-md-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
                onClick={handleNavClick}
              >
                {t("navbar.products")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 py-2 fs-6 fs-md-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
                onClick={handleNavClick}
              >
                {t("navbar.contact")}
              </NavLink>
            </li>

            {/* Language selector only on mobile (Topbar shows it on md+) */}
            <li className="nav-item d-md-none mt-2">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
