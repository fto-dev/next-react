import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState} from 'react';
import GetMenu from './menu'

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
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {GetMenu().map((page, index) =>
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

          <div className="navbar-end">
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
      </nav>
    </>
  );
}
