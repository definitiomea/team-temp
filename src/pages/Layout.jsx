import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';

const Layout = () => {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Layout
