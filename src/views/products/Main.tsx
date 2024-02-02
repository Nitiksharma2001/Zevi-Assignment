import { useEffect, useState } from 'react';
import { productCardEnum, filtersEnum } from '../../dataEnums/product';
import ProductCard from "../../components/card/Card"
import { ProductsGenerator } from '../../features/productsGeneratror';
import Filters from './Filters';

const Main = () => {
  const [products, setProducts] = useState<productCardEnum[]>(new ProductsGenerator().productList)
  const [productsToShow, setProductsToShow] = useState<productCardEnum[]>([])
  const [filters, setFilters] = useState<filtersEnum>({
    brands: [{ name: 'Mango', value: 'mango', isSelected: false }],
    priceRange: [{ start: 100, end: 400, isSelected: false }],
    rating: [{ rating: 1, isSelected: false }]
  })

  useEffect(() => {
    setProductsToShow(products.filter(product => {
      // const check1 = filter?.rating ? product.ratings >= filter?.rating : true
      // const check2 = filter?.brands?.includes(product.title)
      // const check3 = filter?.priceRange.start && filter?.priceRange.end ? filter?.priceRange.start <= product.price && filter?.priceRange.end >= product.price : true
      // return check1 && check2 && check3
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