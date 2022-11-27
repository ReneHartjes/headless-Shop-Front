import React from 'react'
import './Detailstyles.css'
import { useEffect, useState } from 'react'



function Detailtext(props) {

  let [descy, setdescy] = useState()
  useEffect(() => { setdescy(props.desc)},[])
  console.log(props)
  function addtocart(){
    document.cookie = document.cookie+"wkproduct="+props.artnr+";";
    let rn = sessionStorage.getItem("wkproduct");
    rn = rn + "§§" + props.artnr;
    sessionStorage.setItem("wkproduct", rn);
  }

  return (
    <div>
      <div>
        <h3>{props.titel}</h3>
        <br/>
        <p>{props.artnr}</p>
      </div>

      <div>
        <p>
        {props.desc}
        </p>
      </div>

      <div>
        <h3>Preis: {props.price} €</h3>
      </div>
      <div>
        <button onClick={()=>addtocart()}>
          In den Warenkorb legen
        </button><br /><br/>
        <a href="/cart">goto cart </a>
      </div>
    </div>


  )
}

export default Detailtext