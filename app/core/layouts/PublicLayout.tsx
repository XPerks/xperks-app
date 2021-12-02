import * as React from 'react'
import { Head } from "blitz";
import Navbar from '../../marketing/components/Navbar'
import Footer from '../../marketing/components/Footer'

const PublicLayout = ({title, children}) => {
  return (
    <>
      <Head>
        <title>{title || 'XPerks | Find an esports coach today!'}</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Navbar />
        {children}
      <Footer />
    </>
  )
}

export default PublicLayout