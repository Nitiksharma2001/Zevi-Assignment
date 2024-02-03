import { useState } from "react"
import "./SearchPage.scss"
import { Link } from "react-router-dom"

const SearchPage = () => {
  const [text, setText] = useState('')
  const [showTrends, setShowTrends] = useState(false)
  const imagesAndText = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3N8ZW58MHx8MHx8fDA%3D',
      text: 'Yello Dress'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHJlc3N8ZW58MHx8MHx8fDA%3D',
      text: 'Black Dress'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyZXNzfGVufDB8fDB8fHww',
      text: 'White Dress'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyZXNzfGVufDB8fDB8fHww',
      text: 'Red Dress'
    },
  ]
  return (
    <div className="mainSearch">
      <div className="textBox">
        <input className='InputBox' 
        onFocus={() => setShowTrends(true)}
        type="text" placeholder='Search' 
        onChange={(e) => setText(e.target.value)} />

        <Link to='/search'><i className="fa-solid fa-magnifying-glass"></i></Link>
      </div>
      {showTrends && <div className="hoverTrend">
        <div className="latestTrends">
          <h1>Latest Trends</h1>
          <div className="cardImages">
            {
              imagesAndText.map(data => {
                return (
                  <div>
                    <img src={data.imageUrl} alt="" />
                    <h3>{data.text}</h3>
                  </div>
                )
              })
            }
          </div>
          <div className="suggestions">
            <h1>Popular suggestions</h1>
            <div>Striped shirt dress</div>
            <div>Game of Thrones Dress</div>
            <div>Denim Jumpsuit</div>
            <div>Solid Tshirts</div>
          </div>

        </div>
      </div>}
    </div>
  )
}

export default SearchPage