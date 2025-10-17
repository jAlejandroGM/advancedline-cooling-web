import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Collapse } from "bootstrap";
import { FaBars } from "react-icons/fa";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar = ({ links }) => {
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
      className={`navbar navbar-expand-md sticky-top py-2 py-md-3 ${styles["bg-nav"]}`}
      aria-label={t("navbar.navbar-aria-label")}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand p-0 m-0"
          aria-label={t("navbar.logo-aria-label")}
        >
          <img
            src="/banner-low.jpeg"
            alt="ALCooling logo"
            className={styles.brandLogo}
            decoding="async"
            onClick={handleNavClick}
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
          <FaBars
            className={`d-flex align-items-center ${styles.togglerIcon}`}
            aria-hidden="true"
          />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-md-center gap-md-3 gap-lg-4">
            {links.map((link) => (
              <li className="nav-item" key={link.to}>
                <NavLink
                  to={link.to}
                  {...(link.end ? { end: true } : {})}
                  className={({ isActive }) =>
                    `nav-link fs-md-5 ${styles.navLink} ${
                      isActive ? styles.active : ""
                    }`
                  }
                  onClick={handleNavClick}
                >
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}

            <li className="nav-item d-md-none">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
