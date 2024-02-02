import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { filtersEnum } from "../../dataEnums/product"

const Filters = ({filters, setFilters}: {filters: filtersEnum , setFilters: Dispatch<filtersEnum>}) => {
  const handleBrandFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({...filters, brands: filters.brands.map(filter => {
      const {value, name}: {value: string, name: string} = e.target
      if(filter.value === value && filter.name === name){
        return {...filter, isSelected: !filter.isSelected}
      }
      return filter
    })})
  }
  return (
      <div>
          <h3>Brand</h3>
          {
            filters.brands.map((brand, index) => {
              return <div key={index}>
                  <label htmlFor={index.toString()}>{brand.name}</label>
                  <input type="checkbox" value={brand.value} name={brand.name} id={index.toString()} onChange={handleBrandFilterChange}/>
              </div>
            })
          }
      </div>
  )
}

export default Filters