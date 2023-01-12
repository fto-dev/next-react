import '../styles/globals.css'
import Layout from '../components/layout.js'
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.js';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


export default appWithTranslation(App, nextI18NextConfig);
