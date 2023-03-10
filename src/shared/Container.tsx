import { ReactNode } from 'react'
import Head from 'next/head'
import Footer from '@/shared/Footer'

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Konstantin Golubkin Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer />
    </>
  )
}
export default Container
