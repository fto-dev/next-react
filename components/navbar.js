import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import getAllRoutes from "../hooks/getAllRoutes";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        process.env.localesFiles,
        nextI18NextConfig
      )),
    },
  };
}

export default function Navbar() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t } = useTranslation();

  return (
    <>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="navbar is-fixed-top is-size-7 is-hidden-print"
      >
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item has-text-centered-mobile" href="/">
              <img
                src="https://img.klevgrand.se/products/klevgr_logo@2x.png"
                width="100"
                height="20"
                align="middle"
              />
            </a>
            <a
              role="button"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              className="navbar-burger burger is-active"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="main-menu" className="navbar-menu is-active">
            <div className="navbar-start has-text-centered-mobile is-size-6-mobile">
            {getAllRoutes().map((page, index) =>
                page != "index" ? (
                  <Link key={index} href={ page.name == 'index' ? '/' : `/${page.name}` } >
                    <a className="navbar-item">
                      { t(`${page.name}` ).toUpperCase() }
                    </a>
                  </Link>
                ) : (
                  ""
                )
              )}
            </div>
            <hr className="navbar-divider" />
            <div className="navbar-end has-text-centered-mobile is-size-6-mobile">
              <span className="navbar-item"> {t("selectLanguage")} </span>
              {locales.map((locale, index) => (
              <Link href="/" key={index} locale={locale} >
                <a className={`navbar-item ${
                      activeLocale == locale ? "has-text-info" : ""
                    }`}>
                  {locale.toUpperCase()}
                </a>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
