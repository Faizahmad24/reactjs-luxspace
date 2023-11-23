import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Index'
// import Hero from '../parts/Hero'
// import JustArrived from '../parts/HomePage/JustArrived'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
// import Header from '../parts/HEader'


export default function Details() {
  return (
    <>
        <Header theme="black"></Header>
        <Breadcrumb list={[
            {url: "/", name: "Home"},
            {url: "/categories/91231", name: "Office Room"},
            {url: "/categories/91231/products/7888", name: "Details"},
        ]}/>
        <Clients/>
        <Sitemap/>
        <Footer/>
    </>
  )
}
