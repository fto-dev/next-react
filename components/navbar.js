import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';


export async function getStaticProps({ locale }){
  return {
    props: {
        ...(await serverSideTranslations(locale, process.env.localesFiles, nextI18NextConfig ))
    }
  }
}

export default function Navbar() {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;
  const { t } = useTranslation();
  
  return (
    <>
      <div className="container mx-auto px-1">
        <div className="items-center md:flex mt-2 mb-2 pl-2 pr-2">
          <div className="justify-start md:flex md:flex-auto ">
              <Link href="/">
                <a className="mr-7 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> HOME </a>
              </Link>
            {
              process.env.localesFiles.map((page,index) => (
                page != 'index' && page != 'common' ? 
                <Link href={`/${page}`} key={index}>
                  <a className="mr-7 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> { page.toUpperCase() } </a>
                </Link>
                : ''
              ))
            }
          </div>

          <div className="justify-end md:flex md:flex-1 ">
            <span className='text-gray-500'>  {t('selectLanguage')}</span>
            {
              locales.map((locale,index) => (
                <Link href="/" locale={locale} key={index}> 
                  <a className={`ml-8 first-letter:whitespace-nowrap text-base font-medium  hover:text-gray-900 ${activeLocale == locale ? 'text-red-500' : 'text-gray-500'}`}> { locale.toUpperCase() } </a>
                </Link>
              ))
            }
          </div>
          
        </div>
      </div>
    </>
  )
}
