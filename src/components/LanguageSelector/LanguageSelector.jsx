import React from "react";
import styles from "./LanguageSelector.module.css";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <nav aria-label="Selector de idioma">
      <ul className="list-inline m-0">
        <li className="list-inline-item m-0">
          <button
            className={`btn btn-link btn-sm text-white ${styles.noUnderline} ${
              styles.langOption
            } ${
              i18n.language === "es"
                ? styles.selected + " fw-bold text-decoration-underline"
                : ""
            }`}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
        </li>
        /
        <li className="list-inline-item m-0">
          <button
            className={`btn btn-link btn-sm text-white ${styles.noUnderline} ${
              styles.langOption
            } ${
              i18n.language === "en"
                ? styles.selected + " fw-bold text-decoration-underline"
                : ""
            }`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default LanguageSelector;
