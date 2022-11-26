import React, { useState, useEffect } from 'react'
import Detailcross from '../includes/detail/Detailcross'
import Detailimage from '../includes/detail/Detailimage'
import Detailstats from '../includes/detail/Detailstats'
import Detailtext from '../includes/detail/Detailtext'
import Footer from '../includes/Footer'
import Header from '../includes/Header'
import '../includes/detail/Detailstyles.css'
import {useParams} from 'react-router-dom'

function Detailpage() {

    var dataa = [
        {"ArtNr":185263, "Price":30.22, "desc":"Ø65 mm | für Handlaufhalter Q-line MOD 0118 | Zinkdruckguss |für den Innenbereich 10051906519", "url":"https://shop.de.q-railing.com/product/image/medium/100519_0.jpg",
        "spez":"FürModell%0109/0113/0118§§Höhe%16 mm§§Material%Zinkdruckguss§§Modell%0519§§VPE%2 Stk.§§", "Titel":"ABDECKKAPPE FÜR HANDLAUFHALTER, Q-LINE, MOD 0519, ZINK","cross":"187264"
        }]
    
        const params =  useParams()

        let [cat, setcat] = useState([])
    useEffect(() => {     fetch('https://fakestoreapi.com/products/'+params.artid)
    .then(res=>res.json())
    .then(json=>setcat(json))},[])




   let [data ,setdata]  = useState(dataa)  
   let [reqid, setreqid] = useState()
 
   console.log(cat)
  return (
<>
<Header></Header>
    <div className='page'>
    <div className='page-wrap'>
    <div className='Detail-wrap'>
        <div className='Detail-page'>
        <div className='Detail-top'>
            <div className='Detail-img'>
            <Detailimage data1={cat.image}></Detailimage>
            </div>
            <div className='Detail-text'>
                <Detailtext desc={cat.description} price={cat.price} titel={cat.title} artnr={cat.id}></Detailtext>
            </div>
        </div>
        <div className='Detail-Bottom'>
            <div className='Detail-stats'>
            <Detailstats stats={dataa[0].spez}></Detailstats>
            </div>
            <div className='Detail-crossproducts'>
                <Detailcross arts={data[0].cross}></Detailcross>
            </div>
        </div>

        </div>
    </div>
    </div>
    </div>
    <Footer></Footer>
</>
  )
}

export default Detailpage