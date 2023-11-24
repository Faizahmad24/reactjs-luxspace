import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/HomePage/Hero'
import JustArrived from '../parts/HomePage/JustArrived'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

// Custom Hooks
import useScrollAchor from '../helpers/hooks/useScrollAchor'

export default function HomePage() {
  useScrollAchor();
  return (
    <>
        <Header theme="white" position="absolute"></Header>
        <Hero/>
        <BrowseRoom/>
        <JustArrived/>
        <Clients/>
        <Sitemap/>
        <Footer/>
    </>
  )
}
