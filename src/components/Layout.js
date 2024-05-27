//rafce
import React from 'react'
import { Outlet } from 'react-router-dom' //lồng components con vào cha
import Footer from './Footer'
import Header from './Header'
const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout