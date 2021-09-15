import styled from 'styled-components'

export const Wrapper= styled.div`
max-width: var(--maxWidth);
width: 100%;
margin:0 auto;
background: var(--dark);
overflow: hidden;


`
export const Content= styled.div`

padding: 15px 0px;
width: 100%;

.top-icon{
    width: 80%;
    display: flex;
    
    justify-content: space-between;
    margin: 0 auto;

    .icon{
        text-align: center;
        font-size: var(--font);
        opacity: 0.6;
        
        span{
            font-size: var(--fontMini);
        }

    }
    .active{
            color: var(--green);
            opacity: 1;
        }
}




/* cart main  */
.cart-wrapper{
    width: 75%;
    margin: 0 auto;
    background: var(--white);
    padding: 10px 0;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: var(--boxShadow);
    border-radius: 5px;

    @media (max-width:768px){
        width: 100%;
    }

    .cart-top{
        display: flex;
        justify-content: space-between;
        padding: 20px 15px;
        border-bottom: 1px solid var(--dark);

     
        .product{
            width: 40%;
         
            height: 100%;
            text-align: center;
        }
        .price {
            width: 8%;
            text-align: center;
        }
        .tax{
            width: 8%;
            text-align: center;
        }
        .quantity{
            width: 12%;
            text-align: center;
        }
        .total{
            width: 10%;
        
            text-align: center;
        }

        .remove{
            width: 10%;
            text-align: center;
        }
      

        @media (max-width:768px){
       padding: 10px 5px;
       justify-content: space-around;
       .product{
           width: 30%;
           font-size: 1rem;
       }
       .price {
            width: 15%;
            text-align: center;
            font-size: 1rem;
        }
        .tax{
            width: 10%;
            text-align: center;
            font-size: 0.7rem;
            display: none;
        }
        .quantity{
            width: 20%;
            text-align: center;
            font-size: 1rem;
        }
        .total{
            width: 10%;
        
            text-align: center;
            font-size: 0.7rem;
            display: none;
        }

        .remove{
            width: 20%;
            text-align: center;
            font-size: 1rem;
        }
    }


    }

    .cart-bottom{
        display: flex;
        justify-content: space-between;
        padding: 20px 15px;
        border: 1px solid var(--dark);
        .product{
            width: 40%;
            height: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 25%;
            }
            p{
                width: 70%;
                font-size: var(--fontMini);
            }
        }
        .price {
            width: 8%;
            font-size: var(--fontMini);
             height: 100%;
            text-align: center;
           position: relative;
           margin-top: 15px;
            
         
        }
        .tax{
            width: 8%;
            font-size: var(--fontMini);
             height: 100%;
            text-align: center;
           position: relative;
           margin-top: 15px;
        }
        .quantity{
            width: 12%;
            text-align: center;
            display: flex;
            justify-content: space-around;
            margin-top: 15px;
            span{
                height: 25px;
                width: 25px;
                background: var(--dark);
                border-radius: 50%;
                color: var(--black);
                transition: 0.2s linear ;

                :hover{
                    background: var(--green);
                    cursor: pointer;
                    color: var(--white);
                }
            }
            
           
        }
        .total{
            text-align: center;
            width: 10%;
            font-size: var(--fontMini);
             height: 100%;
            
           position: relative;
           margin-top: 15px;
        }

        .remove{
            width: 10%;
        
            text-align: center;
          
             height: 100%;
          
           margin-top: 20px;
           cursor: pointer;
           
        }

        @media (max-width:768px){

padding: 10px 5px;
.product{
   font-size: 0.7rem;
   width: 40%;
   flex-direction: column;
   text-align: center;
}
.price{
    width: 30%;
    font-size: 1rem;
    padding-top: 35px;
    margin-left: -10px;
}

.tax{
    width: 10%;
    display: none;
}

.total{
    display: none;
}

.quantity{
    margin-top: 50px;
    width: 20%;
}

.remove{
    margin-top: 50px;
    width: 10%;
}



}
    }


    .subtotal{
        display: flex;
        justify-content: space-between;
        padding: 15px 25px;
        border-top:1px solid var(--dark);
    }

    .buttons{
        display: flex;
        justify-content: space-between;
        padding: 15px;

        .home{
            color: var(--green);
            font-size: var(--fontMini);
        }

        button{
            padding: 7px;
            border: none;
            background: var(--green);
            font-size: var(--fontMini);
            font-weight: 500;
            color: var(--white);
            border-radius: 2px;
        }
       
    }


}

/* cart main  */

/* cart footer  */
.cart-footerTop{
    width: 100%;
    background: var(--white);
    margin: 15px auto;
    padding: 0;
  
   

    .footerWrapper{
        width: 75%;
        margin: 0 auto;
        padding: 15px;
        display: flex;
        justify-content: space-between;

        div{
            padding: 30px 15px;
            border: 1px solid var(--dark);
            text-align: center;
            color: var(--green);
            font-size: var(--font);
            p{
                font-size: var(--fontMini);
                color: var(--black);
            }
        }
    }

    @media (max-width:768px){

        .footerWrapper{
            width: 100%;

            div{
                width: 20%;
                padding: 15px 10px;
            }
        }
    }
}
/* cart footer  */











@media (max-width:768px){
    padding: 10px 0px;

    .top-icon{
        width: 100%;

        .icon{
            width: 20%;

            span{
                font-size: 0.6rem;
            }
        }
    }
}


`