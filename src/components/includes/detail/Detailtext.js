import React from 'react'
import './Detailstyles.css'
import { useEffect, useState } from 'react'

function Detailtext(props) {

  let [descy, setdescy] = useState()
  useEffect(() => { setdescy(props.desc)},[])

  return (
    <div>
      <div>
        <h3>{props.titel}</h3>
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
        <button>
          In den Warenkorb legen
        </button>
      </div>
    </div>


  )
}

export default Detailtext