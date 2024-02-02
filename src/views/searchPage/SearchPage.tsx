import { useState } from "react"
import SearchInput from "../../components/input/Input"

const SearchPage = () => {
  const [text, setText] = useState('')
  return (
    <div>
        <SearchInput placeholder="Search" setText={setText}/>
    </div>
  )
}

export default SearchPage