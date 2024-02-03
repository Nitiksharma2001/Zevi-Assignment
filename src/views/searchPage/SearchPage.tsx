import { useState } from "react"
import SearchInput from "../../components/input/Input"
import "./SearchPage.scss"
import { Link } from "react-router-dom"

const SearchPage = () => {
  const [text, setText] = useState('')
  return (
    <div className="mainSearch">
      <div className="textBox">
        <SearchInput placeholder="Search" setText={setText}/>
        <Link to='/search'><i className="fa-solid fa-magnifying-glass"></i></Link>
      </div>

    </div>
  )
}

export default SearchPage