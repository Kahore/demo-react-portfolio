import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Container from '@/shared/Container'
import { ThemeContextProvider } from '@/store/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeContextProvider>
  )
}
