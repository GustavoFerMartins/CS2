import React from 'react'
import { NextSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <NextSeo
        title="CS2 STATS"
        description=""
        canonical=""
        openGraph={{
          url: '',
          title:
            '',
          description:
            '',
          images: [{ url: '' }],
          site_name: '',
          locale: 'pt_BR'
        }}
        
      />
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

