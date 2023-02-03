import '../styles/globals.css'
import Layout from '@/components/layout.js'
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';
import { useRouter } from 'next/router'
import '../styles/globals.css'

import 'bulma/css/bulma.min.css' 

function App({ Component, pageProps }) {
  const router = useRouter();
    if (router.pathname == '/') {
        router.localeFile = 'index';
    } else {
        router.localeFile = router.pathname.split('/')[1];
    }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default appWithTranslation(App, nextI18NextConfig);
