import React, { useState } from 'react'
import Header from '../includes/Header'
import Footer from '../includes/Footer'
import axios from 'axios'
import "./Shoppingcart.css"
function Shoppingcart() {


    let [scart, setscart] = useState([])
   
    console.log(sessionStorage.getItem("wkproduct"))
    let wkproducts = sessionStorage.getItem("wkproduct");
    let prods ;
    let [wkprodarr,setwkprodarr] = useState([])
    if(wkproducts){prods = wkproducts.split("§§")}
   
    window.onload = function(){
        document.getElementById("loadbtn").click()
    }

    function loadscart(){
    for (let i = 0; i < prods.length; i++) {
        if(prods[i]){
        const API = "https://fakestoreapi.com/products/"+prods[i]
        const data = axios.get(API).then(res=>{setwkprodarr(wkprodarr => [...wkprodarr, res.data]);})}
        console.log(wkprodarr)

    }


    function cookieset(){



    }


}
function emptyscart(props){
    sessionStorage.removeItem("wkproduct");
    window.location.reload()
    if(props){
        window.alert("Bestellung erfolgreich")
    }
}
  
  return (
    <>
    <Header></Header>
   <div className='page'>
   <div className='page-wrap'>

    <div className='WK'>
        <div className='hidden'>
            <button id="loadbtn"onClick={()=>loadscart()}>click</button>
            <button onClick={()=>emptyscart()}>empty</button>
        </div>

        <div className='WK-cards'>

            
      {wkprodarr.map((statss, index) => (
        <div className='WK-card'>
            <div className='WK-card-img'><img width="80" src={statss.image} /></div>
            <div className='WK-card-text'>
            {statss.title}
            <br/>
            {statss.price} 

            </div>
 
        </div>
      
    ))}
            
        </div>
    </div>


    <button onClick={()=>{emptyscart("success")}}>Jetzt Bestellen</button>

   </div>
   </div>
   <Footer></Footer>
   </>
  )
}

export default Shoppingcart