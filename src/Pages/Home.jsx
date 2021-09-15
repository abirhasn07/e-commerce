import React from 'react';
import Card from '../Components/Card/Card';
import Header from '../Components/Header/Header';
import Navigation from './Navigation';

const Home = ({categories,productData,handleAddToCart,totalItems}) => {
    return (
        <>
    
        <Navigation totalItems={totalItems}/>

        <Header categories={categories}/>
        {/* <FeatureProducts   productData={productData}/>    */}
        <Card productData={productData} handleAddToCart={handleAddToCart}/>
        <Card productData={productData} handleAddToCart={handleAddToCart}/>
        <Card productData={productData} handleAddToCart={handleAddToCart}/>
   
        </>
    )
}

export default Home
