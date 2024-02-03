import { Dispatch, SetStateAction, useState } from "react"
import { filtersEnum } from "../../dataEnums/product"

const Filters = ({uniqueBrands, setFilters}: {uniqueBrands: string[] , setFilters:Dispatch<SetStateAction<filtersEnum>>}) => {
  const [selectedBrands, setSelectedBrand] = useState<string[]>([])
  const handleBrandFilterChange = (brandName: string) => {
    let newBrands = [...selectedBrands, brandName]
    if(selectedBrands.includes(brandName)){
      newBrands = selectedBrands.filter(brand => brand !== brandName)
    } 
    setSelectedBrand(newBrands)
    setFilters((filter: filtersEnum) => {
      return {
        ...filter,
        brands: newBrands
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
      <>
        <h2>Search Results</h2>
        <div className="filters">
          <h3>BRAND</h3>
          {
            uniqueBrands.map((brand, index) => {
              return <div className="checkBox" key={index}>
                  <input type="checkbox" id={index.toString()} onChange={() => handleBrandFilterChange(brand)}/>
                  <label htmlFor={index.toString()}>{brand}</label>
              </div>
            })
          }
        </div> 

        <div className="filters">
          <h3>PRICE RANGE</h3>
            {
              new Array(5).fill('1').map((item, index) => {
                return (
                  <div className="checkBox" key={index}>
                    <input type="radio" name="price range" onChange={() => handlePriceFilterChange(index)}/>
                    <label>Upto {(index+1)*500}</label>
                  </div> 
                )
              })
            }
        </div>

        <div className="filters">
          <h3>RATINGS</h3>
            {
              new Array(5).fill('1').map((item, index) => {
                return (
                  <div className="checkBox" key={index}>
                    <input type="radio" name="rating" onChange={() => handleRatingFilterChange(index)}/>
                    <label>
                      {
                        new Array(5).fill('1').map((item, index2) => {
                          return (
                            <span className={`fa fa-star ${index2 <= index ? 'checked': ''}`}></span>
                          )
                        })
                      }
                     </label>
                  </div> 
                )
              })
            }
          </div>
      </>
  )
}

export default Filters