import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom"
import "react-slick/dist/react-slick"
import Cart from './Components/Cart/Cart'
import categoryData from './fakeData/category'
import { GlobalStyle } from './Globalstyle'
import { commerce } from './lib/commerce'
import AllBrand from './Pages/AllBrand'
import AllCategories from './Pages/AllCategories'
import AllShop from './Pages/AllShop'
import Home from './Pages/Home'
import Offer from './Pages/Offer'

const App = () => {
    const [categories, setCategories] = useState(categoryData)
    
    // api fetching 
    const [productData, setProductData] = useState([])

    // cart fetching
    const [cart,setCart]=useState({})
  
    const fetchProducts=async()=>{
        const {data}=await commerce.products.list()
        setProductData(data)
    }

    
   
    useEffect(() => {
        fetchProducts()
        fetchCart()
        
    },[])
    // api fetching 
        const fetchCart=async()=>{
            setCart(await commerce.cart.retrieve())
        }
    
        const handleAddToCart= async(productId,quantity)=>{
            const item=await commerce.cart.add(productId,quantity)
            setCart(item.cart)
        }

        const handleUpdateCartQuantity= async(productId,quantity)=>{
            const res=await commerce.cart.update(productId,{quantity})
            setCart(res.cart)
        }
        
        const handleRemoveFromCart=async (productId)=>{
            const res =await commerce.cart.remove(productId)
            setCart(res.cart)
        }

    return (
        <>
        <Router>
            <GlobalStyle/>
            <Switch>
            <Route path="/" exact > 
            <Home 
            categories={categories}
            productData={productData}
            handleAddToCart={handleAddToCart}
            totalItems={cart.total_items}    
            />
            </Route>

            <Route path="/cart" exact>
            <Cart 
            cart={cart} 
            handleUpdateCartQuantity={ handleUpdateCartQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            
            />
            </Route>

            <Route path="/allshop">
                <AllShop/>
            </Route>
            <Route path="/offer">
                <Offer/>
            </Route>
            <Route path="/allbrand">
                <AllBrand/>
            </Route>
            <Route path="/allcategories">
                <AllCategories/>
            </Route>
            </Switch>
        </Router>
       
        </>
    )
}

export default App
