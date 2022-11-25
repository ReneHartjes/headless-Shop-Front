import React, { useEffect, useState } from 'react'
import './Detailstyles.css'

function Detailimage(data1) {


  let [imgsrc, setimgsrc] = useState(data1)
  useEffect(() => { setimgsrc(data1)},[])

  return (
    <div className='Detail-img-comp'>
    <img src="https://shop.de.q-railing.com/product/image/medium/100519_0.jpg"/>
    <div>
      <img src="https://shop.de.q-railing.com/product/image/medium/100519_0.jpg" width="100" height="100"/>
      <img src="https://shop.de.q-railing.com/product/image/medium/100519_0.jpg" width="100" height="100"/>
    </div>
    </div>  
  )
}

export default Detailimage