import { useEffect, useState } from 'react';
import { productCardEnum, filtersEnum } from '../../dataEnums/product';
import ProductCard from "../../components/card/Card"
import { ProductsGenerator } from '../../features/productsGeneratror';
import Filters from './Filters';

const Main = () => {
  const [productsList, setProductsList] = useState<productCardEnum[]>([])
  const [productsToShow, setProductsToShow] = useState<productCardEnum[]>([])
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([])
  const [filters, setFilters] = useState<filtersEnum>({
    brands: [],
    priceRange: { start: 0, end: 10000 },
    rating: 0
  })

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch('https://dummyjson.com/products')
      const products = (await resp.json()).products.map((product: productCardEnum) => {
        return {
          ...product,
          discountPercentage: product.discountPercentage as number,
          price: product.price as number,
          rating: product.rating as number,
          stock: product.stock as number
        }
      })
      const uniqBrands = [...new Set(products.map((product: productCardEnum) => product.brand))] as string[]
      setProductsList(products)
      setProductsToShow(products)
      
      setUniqueBrands(uniqBrands)
      setFilters(filter => { 
        return {
          ...filter,
          brands: uniqBrands,
      }})
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(filters)
    setProductsToShow(productsList.filter(product => {
      const check1 = product.rating >= filters.rating
      const check2 = filters.brands.find(item => item === product.brand)
      const check3 = filters.priceRange.start <= product.price && filters.priceRange.end >= product.price
      return check1 && check2 && check3
    }))
  }, [filters, productsList])

  return (
    <div>
      <div> <Filters uniqueBrands={uniqueBrands} setFilters={setFilters} /> </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}> {productsToShow.length > 0 ? productsToShow.map(product => <ProductCard product={product} />) : 'Loading'} </div>
    </div>
  )
}

export default Main