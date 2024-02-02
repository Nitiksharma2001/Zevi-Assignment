import React from 'react'
import { productCardEnum } from '../../dataEnums/product'

const Card = ({product} : {product: productCardEnum}) => {
  return (
    <div>
        <div>{product.title}</div>
        <img src={product.image} alt="" />
    </div>
  )
}

export default Card