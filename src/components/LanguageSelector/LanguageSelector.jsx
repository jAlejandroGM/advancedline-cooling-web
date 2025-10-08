import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <nav aria-label="Selector de idioma">
      <ul className="list-inline mb-0">
        <li className="list-inline-item">
          <button
            className={`btn btn-link btn-sm text-white${
              i18n.language === "es" ? " fw-bold" : ""
            }`}
            onClick={() => i18n.changeLanguage("es")}
          >
            ES
          </button>
        </li>
        <li className="list-inline-item">
          <button
            className={`btn btn-link btn-sm text-white${
              i18n.language === "en" ? " fw-bold" : ""
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
