import React, { useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Footer from '../includes/Footer'
import "./main.css"
import Header from '../includes/Header'
import "./RubView.css"
function RubView(props) {

    let [cat, setcat] = useState([])
    useEffect(() => {     fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setcat(json))},[])

   console.log(cat)
  return (
    <>
    <Header></Header>
    <div className='page'>
    <div className='page-wrap'>

    <div className='Rubview-wrap'>
     {
     
     cat.map((statss, index) => (
      <div className="Rubview-card"> 
        <img src={statss.image} width="120px"></img>
        <div className='Rubview-card-text'>
        <h3>{statss.title}</h3>
        <a href={"/detail/"+statss.id}> view Product</a>
      
        </div>
      </div>
  
     ))}
    </div>


  
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default RubView