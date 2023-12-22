import Logo from '../../assets/Logo-footer.svg'
import './index.scss'

function Footer() {
  return (
    <div className='footer'>
      <img className='footer_logo' src={Logo} alt='Logo du site' />
      <span>© 2020 Kasa. All rights reserved</span>
    </div>
  )
}

export default Footer
