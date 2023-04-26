import React from 'react'
import BtnChecout from './BtnChecout'
const CheckOutPage = () => {
    const currency = "USD";
  return (
    <div>
      <BtnChecout 
      currency={currency}
      showSpinner={false}/>
    </div>
  )
}

export default CheckOutPage
