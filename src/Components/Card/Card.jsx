import { faCartPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import { Content, Wrapper } from './style';


const Card = ({productData,handleAddToCart}) => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      cssEase: "linear",
  
      
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };



    return (
        <Wrapper>
          <Content>

            <h3>Our Features Product</h3>


        <Slider {...settings}>
          {productData.map(product=>{
            return(
          <div key={product.id}>
           <div className="card">
           <img src={product.media.source} alt="" width="100px" />
           <p>{product.name}</p>
           <div className="review">

           <ReactStars
                count={5}
                size={20}
                isHalf={true}
                emptyIcon={<FontAwesomeIcon icon={faStar} />}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                />
            </div>
            <strong>৳{product.price.formatted}</strong>

            <div className="cart">
          <div>
            <FontAwesomeIcon icon={faHeart}  className="icon" title="Add Your Wishlist"/> 
          </div>
          <div>
            <FontAwesomeIcon icon={faCartPlus} className="icon" title="Add Your Cart" onClick={()=>handleAddToCart(product.id,1)}/>
          </div>
        </div>
           </div>
           
          </div>
            )
          })}
        </Slider>
          </Content>
    </Wrapper>
         
    )
}

export default Card
