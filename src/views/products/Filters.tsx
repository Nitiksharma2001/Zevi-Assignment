import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { filtersEnum } from "../../dataEnums/product"

const Filters = ({uniqueBrands, setFilters}: {uniqueBrands: string[] , setFilters: Dispatch<filtersEnum>}) => {
  const handleBrandFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    
  }
  return (
      <div>
        <div>
          <h3>BRAND</h3>
          {
            uniqueBrands.map((brand, index) => {
              return <div key={index}>
                  <input type="checkbox" id={index.toString()} onChange={handleBrandFilterChange}/>
                  <label htmlFor={index.toString()}>{brand}</label>
              </div>
            })
          }
        </div> 

        <div>
          <h3>PRICE RANGE</h3>
          <div>
            <input type="checkbox" id={(1).toString()} onChange={handleBrandFilterChange}/>
            <label htmlFor={(1).toString()}>{'upto 500'}</label>
          </div>
        </div>

        <div>
          <h3>RATINGS</h3>
          <div>
            <input type="checkbox" id={(1).toString()} onChange={handleBrandFilterChange}/>
            <label htmlFor={(1).toString()}>{'5'}</label>
            
            <input type="checkbox" id={(1).toString()} onChange={handleBrandFilterChange}/>
            <label htmlFor={(1).toString()}>{'4'}</label>
          </div>
        </div>
      </div>
  )
}

export default Filters