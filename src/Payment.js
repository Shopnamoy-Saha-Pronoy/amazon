import React from 'react'
import "./Payment.css"

function Payment() {
  return (
    <div class="payment">
       <div className='payment__container'>
        {/* payment section - delivery address */}
        <div className='payment__section'> 
         <div className='payment__title'>
            <h3>Delivery Address</h3>
         </div>
         <div className='payment__address'>
            
             </div>

        </div>
        {/* payment section - Review Item */}
        <div className='payment__section'>
            
        </div>
        {/* payment section - payment method */}
        <div className='payment__section'>
            
        </div>

       </div>
    
    </div>
  )
}

export default Payment