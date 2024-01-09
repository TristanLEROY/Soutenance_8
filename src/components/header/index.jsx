import { Link, useLocation } from 'react-router-dom'
import Logo from '../../assets/logo-header.svg'
import './index.scss'


function Header() {
const id  = useLocation().pathname

  return (
    <header className='header'>
      <Link to='/'>
      <img className='header_logo' src={Logo} alt='Logo du site' />
      </Link>
      <div className='header_link'>
        <Link className= {id === '/' ? ' header_link--active' : 'header_link--home'} to='/'>
          Accueil
        </Link>
        <Link className= {id === '/about' ? ' header_link--active' : 'header_link--about'} to='/about'>
          A Propos
        </Link>
      </div>
    </header>
  )
}

export default Header
