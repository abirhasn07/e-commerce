import { faArrowLeft, faCheckCircle, faCreditCard, faHeadphonesAlt, faMap, faMinus, faPlus, faShoppingCart, faTrashAlt, faTruck, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../Pages/Navigation'
import { Content, Wrapper } from './style'

const Cart = ({cart,handleRemoveFromCart,handleUpdateCartQuantity}) => {
  

    return (
        <>

        <Navigation/>
        <Wrapper>
            <Content> 
           <div className="top-icon">
               <div className="icon active">
                   <FontAwesomeIcon icon={ faShoppingCart}/> <br />
                   <span>1 .My Cart</span>
               </div>
               <div className="icon">
                   <FontAwesomeIcon icon={ faMap}/> <br />
                   <span>2. Shipping info</span>
               </div>
               <div className="icon">
                   <FontAwesomeIcon icon={ faTruck}/> <br />
                   <span>3. Delivery info</span>
               </div>
               <div className="icon">
                   <FontAwesomeIcon icon={ faCreditCard}/> <br />
                   <span>4. Payment</span>
               </div>
               <div className="icon">
                   <FontAwesomeIcon icon={ faCheckCircle}/> <br />
                   <span>5. Confirmation</span>
               </div>
           </div>


           {/* main cart  */}
           <div className="cart-wrapper">
               <div className="cart-top">
               <div className="product">
                       <span>Product</span>
                   </div>
                   <div className="price">
                       <span>price</span>
                   </div>
                   <div className="tax">
                       <span>Tax</span>
                   </div>
                   <div className="quantity">
                       <span>Quantity</span>
                   </div>
                   <div className="total">
                       <span>TOTAL</span>
                   </div>
                   <div className="remove">
                       <span>remove</span>
                   </div>
               </div>

               {cart.line_items?.map(item=>{
                   
                      return(
                          <div className="cart-bottom">
                          <div className="product">
                              <img src={item.media.source} alt={item.name} width="25px" />
                       <p> {item.name}</p>
                        </div>
                   <div className="price">
                       <span>{item.price.formatted}৳</span>
                   </div>
                   <div className="tax">
                       <span>৳0.00</span>
                   </div>
                   <div className="quantity">
                       <span><FontAwesomeIcon icon={faPlus} onClick={()=>handleUpdateCartQuantity(item.id,item.quantity+1)}/></span>
                       <p>{item.quantity}</p>
                       <span><FontAwesomeIcon icon={faMinus} onClick={()=>handleUpdateCartQuantity(item.id,item.quantity-1)}/></span>
                   </div>
                   <div className="total">
                       <span>৳ {item.line_total.raw}</span>
                   </div>
                   <div className="remove">
                       <span><FontAwesomeIcon className="remove-icon" onClick={()=>handleRemoveFromCart(item.id)} icon={faTrashAlt}/></span>
                   </div>
                          </div>
                      )
                  })} 
        <div className="subtotal">
    <h3>Subtotal:</h3> 
    <h3>৳{cart.subtotal?.raw}</h3> 
    </div>

                 
               
           

    <div className="buttons">
        <Link to="/" className="home"> <FontAwesomeIcon icon={faArrowLeft}/> Return Home</Link>
        <button type="button">Continue to Shipping</button>
    </div>
           </div>
           {/* main cart  */}

           {/* cart footer-top */}

           <div className="cart-footerTop">
               <div className="footerWrapper">

                <div className="payment">
                    <FontAwesomeIcon icon={faCreditCard}/>
                    <p>100% payment secured</p>
                </div>
                <div className="payment-support">
                    <FontAwesomeIcon icon={faWallet}/> 
                    <p>Supports Lots of Payment</p>
                </div>
                <div className="support">
                <FontAwesomeIcon icon={faHeadphonesAlt}/> 
                    <p>24/7 Customer Supports</p>
                </div>
                <div className="delivery">
                <FontAwesomeIcon icon={faTruck}/> 
                    <p>Fast Delivery With Low Price</p>
                </div>
               </div>
           </div>
           {/* cart footer-top */}
            </Content>
        </Wrapper>
        </>
    )
}

export default Cart
