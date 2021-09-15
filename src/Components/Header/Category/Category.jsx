import React from 'react'

const Category = ({cat}) => {
    return (
        <div>
            
            <li style={{paddingLeft:"15px",paddingTop:"15px",fontSize:"0.8rem",textTransform:"uppercase",fontWeight:"400"}}>{cat.item}</li>
        </div>
    )
}

export default Category
