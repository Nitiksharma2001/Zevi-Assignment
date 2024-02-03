import { useEffect, useState } from 'react';
import "./Main.scss"
import { productCardEnum, filtersEnum } from '../../dataEnums/product';
import ProductCard from "../../components/card/Card"
import Filters from './Filters';
import { faker } from '@faker-js/faker';

const Main = () => {
  const [productsList, setProductsList] = useState<productCardEnum[]>([])
  const [productsToShow, setProductsToShow] = useState<productCardEnum[]>([])
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([])
  const [filters, setFilters] = useState<filtersEnum>({
    brands: [],
    price: 10000,
    rating: 5
  })

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('https://dummyjson.com/products')
      const products = (await resp.json()).products.map((product: productCardEnum) => {
        return {
          ...product,
          discountPercentage: product.discountPercentage as number,
          price: faker.number.int({ min: 100, max: 2000 }),
          previousPrice: faker.number.int({ min: 2500, max: 4000 }),
          rating: faker.number.float({ min: 0, max: 5 }).toFixed(1),
          views: faker.number.int({ min: 0, max: 1000 })
        }
      })
      const uniqBrands = [...new Set(products.map((product: productCardEnum) => product.brand))] as string[]
      setProductsList(products)
      setProductsToShow(products)
      
      setUniqueBrands(uniqBrands)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setProductsToShow(productsList.filter(product => {
      const check1 = product.rating <= filters.rating
      const check2 = filters.brands.length > 0 ? filters.brands.find(item => item === product.brand) : true
      const check3 = product.price <= filters.price
      return check1 && check2 && check3
    }))
  }, [filters, productsList])

  return (
    <div className='mainSearchAndFilter'>
      <div className='sideBar'> <Filters uniqueBrands={uniqueBrands} setFilters={setFilters} /> </div>
      <div className='main'> {productsToShow.length > 0 ? productsToShow.map((product, index) => <div className="card" key={index}><ProductCard product={product} /></div>) : 'Loading'} </div>
    </div>
  )
}

export default Main