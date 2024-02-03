import { Link } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='element'>Zevi</Link>
    </div>
  )
}

export default Navbar