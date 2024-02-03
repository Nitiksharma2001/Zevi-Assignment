import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { filtersEnum } from "../../dataEnums/product"

const Filters = ({uniqueBrands, setFilters}: {uniqueBrands: string[] , setFilters:Dispatch<React.SetStateAction<filtersEnum>>}) => {
  const [selectedBrands, setSelectedBrand] = useState<string[]>([])
  const handleBrandFilterChange = (brandName: string) => {
    if(selectedBrands.includes(brandName)){
      setSelectedBrand(selectedBrands.filter(brand => brand !== brandName))
    } else {
      setSelectedBrand([...selectedBrands, brandName])
    }
    setFilters((filter: filtersEnum) => {
      return {
        ...filter,
        brands: selectedBrands
      }
    })
  }
  const handlePriceFilterChange = (index:  number) => {
    setFilters((filter: filtersEnum) => {
      return {
        ...filter,
        price: (index+1)*500
      }
    })
  }
  const handleRatingFilterChange = (index:  number) => {
    setFilters((filter: filtersEnum) => {
      return {
        ...filter,
        rating: index+1
      }
    })
  }
  return (
      <div>
        <div>
          <h3>BRAND</h3>
          {
            uniqueBrands.map((brand, index) => {
              return <div key={index}>
                  <input type="checkbox" id={index.toString()} onChange={() => handleBrandFilterChange(brand)}/>
                  <label htmlFor={index.toString()}>{brand}</label>
              </div>
            })
          }
        </div> 

        <div>
          <h3>PRICE RANGE</h3>
          <div>
            {
              new Array(5).fill('1').map((item, index) => {
                return (
                  <div key={index}>
                    <input type="radio" name="price range" onChange={() => handlePriceFilterChange(index)}/>
                    <label>upto {(index+1)*500}</label>
                  </div> 
                )
              })
            }
          </div>
        </div>

        <div>
          <h3>RATINGS</h3>
          <div>
            {
              new Array(5).fill('1').map((item, index) => {
                return (
                  <div key={index}>
                    <input type="radio" name="rating" onChange={() => handleRatingFilterChange(index)}/>
                    <label>{index + 1}</label>
                  </div> 
                )
              })
            }
          </div>
        </div>
      </div>
  )
}

export default Filters