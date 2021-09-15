import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Searchbar from '../Components/Searchbar/Searchbar'
import Topbar from '../Components/Topbar/Topbar'

const Navigation = ({totalItems}) => (

    <>
    <Topbar/>
    <Searchbar totalItems={totalItems}/>
    <Navbar/>
    
    </>

)

export default Navigation
