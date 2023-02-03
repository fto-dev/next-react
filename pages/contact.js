import Head from 'next/head'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { useTranslation } from 'next-i18next';


export async function getStaticProps({ locale }){
  return {
    props: {
        ...(await serverSideTranslations(locale, process.env.localesFiles, nextI18NextConfig ))
    }
  }
}

export default function Contact() {

  const { t } = useTranslation(process.env.localesFiles);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Contact | Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='mt-5'>
        <div className="container mx-auto px-5">
          <div className='text-3xl font-bold underline'> { t('conctactHeading', { ns: router.localeFile }) } </div> 

          <div className='text-3xl font-bold underline'> 
            { t('conctactNumber', { ns: router.localeFile }) }
          </div>  
        </div>  
        
      </main>
    </>
  )
}