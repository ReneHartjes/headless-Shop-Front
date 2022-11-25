import React from 'react'
import './ShopHighlights.css'

function ShopHighlights() {
  return (
    <>
        <div>
            <br/>
            <br />
            <h3>SHOP HIGHTLIGHTS</h3>
            <br/>
            <div className='Highlights-wrapper'>
                <div className='Highlights-card-wrapper'>
                    <div className='Highlights-card'>
                        <img src="https://shop.de.q-railing.com/content/files/images/homepage/highlights/2000029%20-%20QR%20E-commerce%20%5BPRIME%5D%5B600x600%5D%20DE.jpg"/>
                    </div>
                    <div className='Highlights-card'>
                        <img src="https://shop.de.q-railing.com/content/files/images/homepage/highlights/2000029%20-%20QR%20E-commerce%20%5BQLINE%5D%5B600x600%5D%20DE.jpg"/>
                    </div>
                    <div className='Highlights-card'>
                        <img src="https://shop.de.q-railing.com/content/files/images/homepage/highlights/2000029%20-%20QR%20E-commerce%20%5BEASYALU%5D%5B600x600%5D%20DE.jpg"/>
                    </div>

                </div>
                
                
            </div>
        </div>
    </>
  )
}

export default ShopHighlights