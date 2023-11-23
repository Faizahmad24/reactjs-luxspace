import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import JustArrived from '../parts/HomePage/JustArrived'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
// import Header from '../parts/HEader'


export default function HomePage() {
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
