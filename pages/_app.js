import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'

import { ChakraProvider } from '@chakra-ui/react'
import customTheme from '../stlyes/theme'
import Head from 'next/head'

// Router.events.on('routeChangeComplete', () => {
//   Fathom.trackPageview();
// });

function App ({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Head>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta
          content='width=device-width, initial-scale=1'
          name='viewport'
        />
        <meta content='#ffffff' name='theme-color' />
        <meta content='#ff415b' name='msapplication-TileColor' />
        <meta
          content='/static/favicons/browserconfig.xml'
          name='msapplication-config'
        />
        <meta content='14d2e73487fa6c71' name='yandex-verification' />
        <meta
          content=''
          name='google-site-verification'
        />
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
