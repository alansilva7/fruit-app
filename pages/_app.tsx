import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BagProvider } from "../contexts/bag"

function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <BagProvider>
      <Component {...pageProps} />
    </BagProvider> 
  )
}

export default MyApp
