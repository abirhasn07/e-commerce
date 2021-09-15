import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
const Wrapper=styled.div`
max-width: var(--maxWidth);
margin: 0 auto;
width: 100%;
padding: 0 35px;
`
const AllBrand = () => {
    return (
        <>
        <Navigation/>
         <Wrapper>
            <h2>This Section Coming Soon</h2>
        </Wrapper>   
        </>
    )
}

export default AllBrand
