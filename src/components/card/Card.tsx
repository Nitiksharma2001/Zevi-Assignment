import React from 'react'
import { productCardEnum } from '../../dataEnums/product'
import "./Card.scss"

const Card = ({product} : {product: productCardEnum}) => {
  return (
    <div className='card'>
        <img src={product.images[0]} alt="error" />
        <h4>{product.title}</h4>
        <h5><span>Brand</span> <span>{product.brand}</span></h5>
        <div>
          <span>Rs. {Math.trunc(product.price + 50*Math.random() + 50)}</span> <span style={{color:'blue'}}>{product.price}</span>
        </div>
        <div> <span>Rating</span> <span>({product.rating})</span></div>
        <div>
          <span>Stocks</span> <span>({product.stock})</span>
        </div>

    </div>
  )
}

export default Card