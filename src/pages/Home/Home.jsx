import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Home.module.css";
import { FaCheckCircle } from "react-icons/fa";
import products from "../../data/products";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import mascot from "../../assets/mascota-coolcito.png";

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
              <h1 className={`fw-bold ${styles.sectionTitle}`}>
                {t("home.hero.title")}
              </h1>
              <p className="lead">{t("home.hero.subtitle")}</p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/productos"
                  className={`btn rounded-pill px-4 py-2 ${styles.btnProducts}`}
                  aria-label={t("home.hero.ctaProductsAria")}
                >
                  {t("home.hero.ctaProducts")}
                </Link>
                <Link
                  to="/contacto"
                  className={`btn btn-outline-light rounded-pill px-4 py-2 ${styles.btnContact}`}
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
      <section className={styles.section} aria-labelledby="home-about-title">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-6">
              <h2
                id="home-about-title"
                className={`text-uppercase mb-3 ${styles.sectionTitle}`}
              >
                {t("home.about.title")}
              </h2>
              <p className="lead">{t("home.about.text")}</p>
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
          <div className="row align-items-end g-3">
            <div className="col-12 col-sm">
              <h2
                id="home-products-title"
                className={`text-uppercase mb-3 ${styles.sectionTitle}`}
              >
                {t("home.products.title")}
              </h2>
              <p className="text-muted mb-0 small">
                {t("home.products.subtitle")}
              </p>
            </div>
          </div>
        </div>
        <ProductCarousel
          items={products}
          renderItem={(p) => {
            const titleKey = `products.${p.id}.title`;
            const descKey = `products.${p.id}.desc`;
            const title = t(titleKey, { defaultValue: p.name });
            const desc = t(descKey, { defaultValue: p.shortDesc });
            return (
              <div className={`card ${styles.productCard}`}>
                <div className={styles.productThumb} aria-hidden="true" />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="h5 card-title">{title}</h3>
                    <p className="card-text small text-muted">{desc}</p>
                  </div>
                  <Link
                    to="/productos"
                    className={`small ${styles.btnDetails}`}
                  >
                    {t("home.products.cta")}
                  </Link>
                </div>
              </div>
            );
          }}
        />
      </section>

      {/* Catalog CTA with mascot */}
      <section className={styles.section} aria-labelledby="home-catalog-cta">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-8">
              <h2
                id="home-catalog-cta"
                className={`text-uppercase mb-3 ${styles.sectionTitle}`}
              >
                {t("home.catalogCta.title")}
              </h2>
              <p>{t("home.catalogCta.text")}</p>
              <Link
                to="/productos"
                className={`btn rounded-pill px-4 py-2 ${styles.btnProducts}`}
              >
                {t("home.catalogCta.cta")}
              </Link>
            </div>
            <div className="col-12 col-md-4 text-center">
              <img
                src={mascot}
                alt={t("home.catalogCta.mascotAlt")}
                className={styles.catalogMascot}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section
        className={`${styles.section} ${styles.surfaceSecondary}`}
        aria-labelledby="home-why-title"
      >
        <div className="container">
          <h2
            id="home-why-title"
            className={`mb-4 text-uppercase ${styles.sectionTitle}`}
          >
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
      <section className={styles.section} aria-label={t("home.cta.aria")}>
        <div className="container">
          <div className="row align-items-center gy-3">
            <div className="col-12 col-md-8">
              <h2 className={`mb-1 ${styles.sectionTitle}`}>
                {t("home.cta.title")}
              </h2>
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
