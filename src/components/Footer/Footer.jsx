import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      {/* Top section */}
      <div className={`${styles.footerTop} py-4 py-md-5`}>
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-12 col-md-6 col-lg-5">
              <div className="d-flex flex-column flex-sm-row flex-md-column gap-3 gap-sm-4">
                <div>
                  <Link
                    to="/"
                    aria-label={t("footer.logo-aria-label")}
                    className="d-inline-block"
                  >
                    <img
                      src="/banner-low.jpeg"
                      alt="ALCooling logo"
                      className={styles.footerLogoImg}
                      decoding="async"
                    />
                  </Link>
                </div>
                <p className={`${styles.footerSlogan} mb-0`}>
                  {t("footer.slogan")}
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 ms-lg-auto">
              <h6 className="text-uppercase">{t("footer.contact")}</h6>
              <ul className="list-unstyled small m-0">
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaEnvelope size={14} color="var(--color-titles)" />
                  <a
                    href="mailto:contacto@alcooling.com"
                    className={styles.footerLink}
                  >
                    contacto@alcooling.com
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaPhone
                    size={14}
                    color="var(--color-titles)"
                    className={styles.phoneIcon}
                  />
                  <a href="tel:+51999999999" className={styles.footerLink}>
                    +51 999 999 999
                  </a>
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <FaMapMarkerAlt size={14} color="var(--color-titles)" />
                  <span className="d-block">{t("footer.dir")}</span>
                </li>
              </ul>
              <div>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("topbar.wsp-aria-label")}
                  className={styles.wspCta}
                  title={t("topbar.wsp-aria-label")}
                >
                  <FaWhatsapp size={36} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className={`bg-black  ${styles.footerBottom} py-3`}>
        <div className="container">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2">
            <div>
              <span>
                © {currentYear} Advanced Line Cooling S.A.C.{" "}
                {t("footer.legal.copyrigth")}
              </span>
            </div>
            <div className="text-sm-end">
              <span className="me-1">{t("footer.legal.designedBy")}</span>
              <a
                href="https://github.com/jAlejandroGM"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.legal.aria-label")}
              >
                Alejandro Guzmán
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
