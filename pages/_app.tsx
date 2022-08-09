import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BagProvider } from "../contexts/bag"
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import Header from '../componets/Header';

type NextPageWithLayout = NextPage & { getLayout?: (page: ReactElement) => ReactNode }
type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout }

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page) // Use the layout defined at the page level, if available
  
  return(
    <BagProvider>

      <Header />

      {getLayout(<Component {...pageProps} />)}

    </BagProvider> 
  )
}

export default MyApp
