import Link from "next/link";
import { useTranslation } from "next-i18next";
import getAllRoutes from "@/hooks/getAllRoutes";
 
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
    <footer className="footer has-background-primary">
      <div className="has-text-centered has-text-white">
        <div className="columns">
          <div className="column is-one-quarter">
            <ul className="list is-unstyled">
              {getAllRoutes().map((page, index) =>
                page != "index" ? (
                  <li key={index} className="has-text-left">
                    <Link href={ page.name == 'index' ? '/' : `/${page.name}` } >
                      <a className="has-text-primary-light">
                        { t(`${page.name}` ).toUpperCase() }
                      </a>
                    </Link>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
