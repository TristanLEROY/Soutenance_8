import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-header.svg'
import './index.scss'
// import { useLocation } from 'react-router-dom'

function Header() {
  // const parameter = useLocation()

  // if (parameter.pathname === '/about') {
  //   const linkActif = document.getElementsByClassName('header_link--about')
  //   linkActif.className.add('header_link--active')
  // }

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
