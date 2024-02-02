import { useEffect, useState } from 'react';
import { productCardEnum, filtersEnum } from '../../dataEnums/product';
import ProductCard from "../../components/card/Card"
import { ProductsGenerator } from '../../features/productsGeneratror';
import Filters from './Filters';

const Main = () => {
  const [products, setProducts] = useState<productCardEnum[]>(new ProductsGenerator().productList)
  const [productsToShow, setProductsToShow] = useState<productCardEnum[]>([])
  const [filters, setFilters] = useState<filtersEnum>({
    brands: [
      { name: 'Electronic Cotton Fish', value: 'Electronic Cotton Fish', isSelected: true }, 
      { name: 'Fantastic Frozen Chips', value: 'Fantastic Frozen Chips', isSelected: true }
    ],
    priceRange: { start: 100, end: 1000 },
    rating: { value: 2 }
  })

  useEffect(() => {
    const brand = filters.brands.filter(brand => brand.isSelected)
    setProductsToShow(products.filter(product => {
      const check1 = product.ratings >= filters.rating.value
      const check2 = brand.find(item => item.name === product.title)
      const check3 = filters.priceRange.start <= product.price && filters.priceRange.end >= product.price
      return check1 && check2 && check3
    }))
    
  }, [filters, products])

  return (
    <div>
      <div> <Filters filters={filters} setFilters={setFilters} /> </div>
      <div> {productsToShow.length > 0 ? productsToShow.map(product => <ProductCard product={product} />) : 'Loading'} </div>
    </div>
  )
}

export default Main