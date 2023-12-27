import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-header.svg'
import './index.scss'

function Header() {
  return (
    <header className='header'>
      <img className='header_logo' src={Logo} alt='Logo du site' />
      <div className='header_link'>
        <Link className='header_link--home' to='/'>
          Accueil
        </Link>
        <Link className='header_link--about' to='/about'>
          A Propos
        </Link>
      </div>
    </header>
  )
}

export default Header
