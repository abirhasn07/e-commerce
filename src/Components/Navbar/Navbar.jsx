import React from 'react'
import { Link } from 'react-router-dom'
import { Content, Wrapper } from './style'

const Navbar = () => {
    return (
        <Wrapper>
            <Content>
            <ul className="nav-list row">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/allcategories" className="nav-item">All Categories</Link>
                <Link to="/allbrand" className="nav-item">All Brand</Link>
                <Link to="/allshop" className="nav-item">All Shop</Link>
                <Link to="/offer" className="nav-item">Offer</Link>
            </ul>
            </Content>
        </Wrapper>
    )
}

export default Navbar
