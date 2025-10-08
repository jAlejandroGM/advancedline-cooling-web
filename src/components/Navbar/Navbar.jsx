import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav
      className={`navbar navbar-expand-md ${styles["bg-nav"]}`}
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
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/vite.svg";
            }}
          />
        </Link>

        {/* Toggler for mobile */}
        <button
          className={`navbar-toggler ${styles["navbar-toggler-color"]}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label={t("navbar.navbar-aria-label-toggler")}
        >
          <FaBars size={22} aria-hidden="true" />
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-md-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 fs-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {t("navbar.home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 fs-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {t("navbar.about")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/knowledge"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 fs-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {t("navbar.knowledge")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 fs-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
              >
                {t("navbar.products")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link px-2 px-md-3 fs-5 ${styles.navLink} ${
                    isActive ? styles.active : ""
                  }`
                }
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
