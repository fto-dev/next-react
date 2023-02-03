import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
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

export default function BlogCard({
  title,
  description,
  image,
  imageAlt,
  link,
}) {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t } = useTranslation();

  return (
    <>
      <div className="ng-star-inserted">
        <div className="columns is-centered is-ordered-desktop">
          <div className="column is-6-tablet-only is-order-2-desktop">
            <div className="ng-star-inserted">
              <Image src={image} alt={imageAlt} width={640} height={480} />
            </div>

            <div className="spacer-s is-hidden-mobile"></div>
          </div>
          <div className="column is-12-mobile is-8-tablet-only is-7-desktop is-order-1-desktop">
            <div className="is-relative"></div>

            <h3
              className="title is-3 is-clickable ng-star-inserted"
              tabIndex="0"
            >
              {title}
            </h3>

            <div className="content is-medium_ is-family-sans-serif_">
              <markdown>
                <p>
                  {description}
                  We at Klevgrand are very fortunate and spoiled by having a
                  number of still touring musicians and bands within the
                  Klevgrand office walls. It's a bit like the chicken or the egg
                  - what came first - Klevgrand Musicians or Klevgrand
                  instruments.
                </p>
              </markdown>
            </div>

            <Link href={`blog/${link}`}>
              <a className="button is-small_ is-link is-rounded ng-star-inserted">
                <span>Read full blog</span>
                <span className="icon is-small">
                  <svg viewBox="0 0 448 512" fill="white">
                    <path d="m224.3 273-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                  </svg>
                </span>
              </a>
            </Link>

            <div className="spacer-s is-hidden-mobile"></div>
          </div>
        </div>
        
        <hr /> 
        <div className="spacer-s"></div>
      </div>
    </>
  );
}
