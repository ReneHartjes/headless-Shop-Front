import React, { useState, useEffect } from 'react'
import './Detailstyles.css'

function Detailstats(props) {

  
  let [stat, setstat] = useState()
 
  let status = props.stats.split("§§")

  return (
    <div>
      <table>
      {status.map((statss, index) => (
        <tr>
          <td>
          {
            statss.split("%")[0]
          }
          </td>
          <td>
          {
          statss.split("%")[1]
          }
          </td>
        </tr>
      
    ))}
      </table>
    </div>
  )
}

export default Detailstats