import React from 'react'
import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb/Index'
import ShoppingCart from '../parts/Cart/ShoppingCart'
import ShippingOfDetail from '../parts/Cart/ShippingOfDetail'
// import ProductDetails from '../parts/Details/ProductDetails'
// import Suggestion from '../parts/Details/Suggestion'
// import Hero from '../parts/Hero'
// import JustArrived from '../parts/HomePage/JustArrived'
// import BrowseRoom from '../parts/HomePage/BrowseRoom'
// import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'
// import ShoppingCart from '../parts/Cart/ShoppingCart'
// import Header from '../parts/HEader'


export default function Cart() {
  return (
    <>
        <Header theme="black"></Header>
        <Breadcrumb list={[
            {url: "/", name: "Home"},
            {url: "/cart", name: "Shopping Cart"},
        ]}/>

        <section className="md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex -mx-4 flex-wrap">
                <ShoppingCart/>
                <ShippingOfDetail/>
            </div>
          </div>
        </section>
        {/* <Clients/> */}
        {/* <ProductDetails/>
        <Suggestion/> */}
        <Sitemap/>
        <Footer/>
    </>
  )
}
