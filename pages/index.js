import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config";
import { useTranslation } from "next-i18next";
import { useState } from "react";

//@todo: @ source alias add
import MultipleContent from "@/components/multiple-content.js";

import { StringMerge } from "@/hooks/stringMerge";
import { useEffect } from "react";

import image from '../public/images/banner-wide.jpeg'

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

export default function Home() {
  const { t } = useTranslation(process.env.localesFiles);
  const router = useRouter();
  const homeContent = t("homeContent", {
    returnObjects: true,
    ns: router.localeFile,
  });

  const stringExample = "Name";
  const stringExampleSur = "Surname";

  let dant = StringMerge();

  const styling = { backgroundImage: `url(${image.src})`}

  return (
    <>
      <Head>
        <title>Home | Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        {homeContent.map((item, index) => (
          <div key={index}>
            <div className="hero is-medium hero-learn" style={styling}>
              <div className="hero-body"></div>
              <div className="hero-footer">
                <h1 className="title is-1 has-text-centered" >
                  <span className="has-background-white"> {item.title}</span>
                </h1>
              </div>
            </div>

            <section className="section_ ">
              <div className="section">
                <div className="container">
                  <p className="is-size-5">{item.description}</p>
                  <div className="spacer-s"></div>
                  <div className="spacer-m"></div>
                </div>
              </div>
            </section>
          </div>
        ))}

        {/* 
        @todo: add interactivity, user can change content with info promp (localstorage update)
        <div className="text-3xl font-bold underline"> {dant} </div>
        <div className="text-3xl font-bold underline"> {t("homeHeading", { ns: router.localeFile })} </div> */}
        
        
      </>
    </>
  );
}
