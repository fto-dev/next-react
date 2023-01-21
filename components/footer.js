import Link from "next/link";
import { useTranslation } from "next-i18next";
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

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="">
        <div className="container mx-auto px-1">
          <div className="items-center md:flex mt-2 mb-2 pl-2 pr-2">
            <div className="justify-start md:flex md:flex-auto ">
              {GetMenu().map((page, index) =>
                page != "index" ? (
                  <Link key={index} href={ page.name == 'index' ? '/' : `/${page.name}` } >
                    <a className="mr-7 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                      { t(`${page.name}` ).toUpperCase() }
                    </a>
                  </Link>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
