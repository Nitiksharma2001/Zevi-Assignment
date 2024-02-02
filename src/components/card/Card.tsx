import React from 'react'
import { productCardEnum } from '../../dataEnums/product'

const Card = ({product} : {product: productCardEnum}) => {
  return (
    <div className='card'>
        <img src={product.image} alt="error" />
        <h4>{product.title}</h4>
        
        <div>
          {product.stars} <span>{product.ratings}</span>
        </div>

    </div>
  )
}

export default Card