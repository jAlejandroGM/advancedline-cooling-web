// Intentionally left blank to remove duplicate initial implementation
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import { FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero section */}
      <section
        className={`${styles.hero} ${styles.section}`}
        aria-label={t("home.hero.aria")}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 py-md-4 d-flex flex-column gap-2">
              <h1 className="display-5 fw-bold">{t("home.hero.title")}</h1>
              <p className="lead">{t("home.hero.subtitle")}</p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/productos"
                  className="btn btn-light px-4 py-2"
                  aria-label={t("home.hero.ctaProductsAria")}
                >
                  {t("home.hero.ctaProducts")}
                </Link>
                <Link
                  to="/contacto"
                  className="btn btn-outline-light px-4 py-2"
                  aria-label={t("home.hero.ctaContactAria")}
                >
                  {t("home.hero.ctaContact")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section
        className={`${styles.section}`}
        aria-labelledby="home-about-title"
      >
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <h2 id="home-about-title" className="h3 mb-3 text-uppercase">
                {t("home.about.title")}
              </h2>
              <p className="lead mb-0">{t("home.about.text")}</p>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.aboutIllustration} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section
        className={`${styles.section} ${styles.surfaceSecondary}`}
        aria-labelledby="home-products-title"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h2 id="home-products-title" className="h3 mb-1 text-uppercase">
                {t("home.products.title")}
              </h2>
              <p className="text-muted mb-0 small">
                {t("home.products.subtitle")}
              </p>
            </div>
            <div className="d-none d-sm-block">
              <Link to="/productos" className="btn btn-outline-primary">
                {t("home.products.viewAll")}
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {t("home.products.items", { returnObjects: true }).map(
              (item, idx) => (
                <div key={idx} className="col-12 col-sm-6 col-lg-4">
                  <div className={`card h-100 ${styles.productCard}`}>
                    <div className={styles.productThumb} aria-hidden="true" />
                    <div className="card-body">
                      <h3 className="h5 card-title">{item.title}</h3>
                      <p className="card-text small text-muted mb-3">
                        {item.desc}
                      </p>
                      <Link to="/productos" className="stretched-link">
                        {t("home.products.cta")}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="d-sm-none mt-4">
            <Link to="/productos" className="btn btn-outline-primary w-100">
              {t("home.products.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={styles.section} aria-labelledby="home-why-title">
        <div className="container">
          <h2 id="home-why-title" className="h3 mb-4 text-uppercase">
            {t("home.why.title")}
          </h2>
          <div className="row g-4">
            {t("home.why.items", { returnObjects: true }).map((text, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-3">
                <div
                  className={`d-flex align-items-start gap-3 ${styles.benefit}`}
                >
                  <FaCheckCircle className={styles.benefitIcon} />
                  <p className="mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className={`${styles.section} ${styles.surfaceSecondary}`}
        aria-label={t("home.cta.aria")}
      >
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-md-8">
              <h2 className="h4 mb-1">{t("home.cta.title")}</h2>
              <p className="mb-0 text-muted">{t("home.cta.subtitle")}</p>
            </div>
            <div className="col-12 col-md-4 d-flex gap-3 justify-content-md-end">
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
                aria-label={t("topbar.wsp-aria-label")}
              >
                {t("home.cta.whatsapp")}
              </a>
              <Link to="/contacto" className="btn btn-primary">
                {t("home.cta.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
