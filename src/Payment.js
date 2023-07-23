import React, { useEffect, useState } from "react";
import "./Payment.css"
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, navigate, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";

function Payment() {
  const [{ basket, user}, dispatch ]= useStateValue();
  const stripe= useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded]= useState(false);
  const [processing, setProcessing]= useState('');
  const{error, setError}= useState(null);
  const{disabled, setDisabled} = useState(true);
  const{clientSecret, setClientSecret} = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payment/create?total=${getBasketTotal(basket)*100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  }, [basket])
  const handleSubmit = async (event) =>{
    //do all the fancy stripe stuf....
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment__method:{
          card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      //paymentIntent = payment confirmation

      setSucceeded(true);
      setError(null);
      setProcessing(false)

      navigate.replaceState('/order')
    })
  }
  const handleChange = event =>{
    setDisabled(event.emty);
    setError(event.error ? event.error.message: "");
    
  }
    return (
    <div class="payment">
       <div className='payment__container'>
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} item </Link>)
        </h1>
        {/* payment section - delivery address */}
        <div className='payment__section'> 
         <div className='payment__title'>
            <h3>Delivery Address</h3>
         </div>
         <div className='payment__address'>
            <p>{user?.email}</p>
            <p>DOHS,Mohakhali</p>
            <p>Dhaka 1212</p>
             </div>

        </div>
        {/* payment section - Review Item */}
        <div className='payment__section'>
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item =>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              />
            ))}
          </div>
            
        </div>
        {/* payment section - payment method */}
        <div className='payment__section'>
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className="payment__priceContainer">
              <CurrencyFormat
        renderText={(value) => (
         <h3>Order Total:{value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button disabled={processing || disabled || succeeded}>
        <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
      </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
            
        </div>

       </div>
    
    </div>
  )
}

export default Payment