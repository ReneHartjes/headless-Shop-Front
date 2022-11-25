import React, { useEffect, useState } from 'react'
import './Detailstyles.css'

function Detailimage(data1) {


  console.log(data1)

  return (
    <div className='Detail-img-comp'>
    <img src={data1.data1} width="500px"/>
    <div>
      <img src={data1.data1} width="100" height="100"/>
      <img src={data1.data1} width="100" height="100"/>
    </div>
    </div>  
  )
}

export default Detailimage