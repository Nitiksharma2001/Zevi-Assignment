import React, { useState } from 'react'
import { productCardEnum } from '../../dataEnums/product'
import "./Card.scss"

const Card = ({ product }: { product: productCardEnum }) => {
  const [view, setView] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  return (
    <div onMouseOver={() => setView(true)} onMouseLeave={() => setView(false)} >
      <div className='image'>
        <img src={product.images[0]} alt="error" />
        <i className={`fa-${isLiked ? 'solid' : 'regular'} fa-heart heart`}
          onClick={() => setIsLiked(!isLiked)}
          style={{ color: isLiked ? 'red' : '', cursor: 'pointer' }}>
        </i>
        <div className='view' style={{ display: view ? 'block' : 'none' }}>View Product</div>
      </div>
      <div style={{ fontSize: '1.3rem' }}>{product.title}</div>
      <div><span style={{ fontWeight: 'bolder' }}>Brand:</span> {product.brand}</div>
      <div>
        <span style={{ color: 'grey', textDecoration: 'line-through' }}>
          {`Rs. ${product.previousPrice}`}</span>
        <span style={{ color: 'blue', fontWeight: 'bolder' }}>{` Rs. ${product.price}`}</span>
      </div>
      <div> <span style={{ fontWeight: 'bold' }}>Rating:</span> <span>{product.rating}</span><span>({product.views})</span></div>
    </div>
  )
}

export default Card