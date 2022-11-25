import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div className='Header-wrap'>
    <div className='Header'>
        <div className='Header-top'>
           <div> <ul className='Header-promise'><li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />Große Auswahl</li>
           <li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />Schnelle Lieferung</li>
           <li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />Höchste Qualität</li>
           <li><img width="16" height="16" src="https://shop.de.q-railing.com/content/files/images/usp_1.png" />Maximale Sicherheit</li>
           </ul></div>
           <div> <ul className='Header-user-nav'><li>GER</li><li>Fragen?Rufen Sie uns am:02822-915-69-0</li><li>Anmelden</li><li><img src="https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small/profile-icon-login-head-icon-vector.jpg" width="16" height="16"/></li></ul></div>
        </div>
        <div className='Header-mid'>
            <div>
            <a href="/"><img src='https://shop.de.q-railing.com/content/files/content/logo-q-railing.png'/></a>
            </div>
            <div className='Header-mid-search'>
                <input type="text"/><button>search</button>
            </div>
            <div id="Header-mid-search-results"></div>
        </div>
        <div className='Header-bottom'>
            <ul><li><a href="/products">PRODUKTE</a></li><li>SYSTEME</li><li>HIGHLIGHTS</li><li>BESTSELLER</li><li>%SALE</li></ul>
        </div>
    </div>
    </div>
  )
}

export default Header