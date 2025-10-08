import React from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import styles from "./Topbar.module.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function Topbar() {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white py-1 d-none d-md-block">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        {/* Contacto */}
        <div
          className={`d-flex flex-column flex-sm-row align-items-center gap-2 gap-md-4 ${styles["contact-info"]} text-center text-md-start`}
        >
          <span className="d-flex align-items-center gap-1">
            <FaEnvelope color="white" size={14} />
            <a
              href="mailto:contacto@alcooling.com"
              aria-label={t("topbar.email-aria-label")}
            >
              contacto@alcooling.com
            </a>
          </span>
          |
          <span className="d-flex align-items-center gap-1">
            <FaPhone color="white" size={14} />
            <a href="tel:+51999999999" aria-label={t("topbar.tel-aria-label")}>
              +51&nbsp;999&nbsp;999&nbsp;999
            </a>
          </span>
          |
          <a
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className={`d-flex align-items-center gap-1 rounded-pill ${styles["wsp-btn"]}`}
            aria-label={t("topbar.wsp-aria-label")}
            title={t("topbar.wsp-aria-label")}
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
        </div>
        {/* Idiomas  */}
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Topbar;
