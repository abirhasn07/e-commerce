import { faSearch, faShoppingCart, faSignInAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/Logo.png';
import { Content, Wrapper } from "./style";


const Searchbar = ({totalItems}) => {
  const location=useLocation()
  return (
    <Wrapper>
      <Content>
        <div className="logo">
            <img src={logo} alt="Mogobari Online Shopping & Service in Bangladesh |" />
        </div>
        <form action="" className="input">
            <input type="text" name="search-item" id="search-item" placeholder="I am shopping for..." />
            <span>
                <FontAwesomeIcon icon={faSearch}/>
            </span>
        </form>
        <div className="login row">
            <div className="buttons">
                <a href="#login"> <span><FontAwesomeIcon icon={faSignInAlt}/></span> Login</a> <br />
                <a href="#login"><span><FontAwesomeIcon icon={faUser}/></span> Registrations</a>
            </div>


            <div className="cart">
            {
  location.pathname==="/"&&  (
    
    <Link to="/cart"  style={{color:"207567"}}> 
    <FontAwesomeIcon icon={faShoppingCart} style={{color:"207567"}}/>
    <p>{totalItems}</p>
  </Link>
  )
}
            </div>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Searchbar;
