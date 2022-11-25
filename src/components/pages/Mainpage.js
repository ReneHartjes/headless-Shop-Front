import React from 'react'
import Header from '../includes/Header'
import Banner from '../includes/Banner'
import UnserSortiment from '../includes/UnserSortiment'
import ShopHighlights from '../includes/ShopHighlights'
import Footer from '../includes/Footer'
import './main.css'


function Mainpage() {
  return (
    <>
    <div className='page'>
    <div className='page-wrap'>
    <Header></Header>
    <Banner></Banner>
    <UnserSortiment></UnserSortiment>
    <ShopHighlights></ShopHighlights>
  
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Mainpage