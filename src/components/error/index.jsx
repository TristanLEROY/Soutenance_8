import { Link } from 'react-router-dom'
import './index.scss'

function Error() {
  return (
    <div className='error'>
      <h1 className='error_title'>404</h1>
      <p className='error_title--p'>
        Oups! La page que vous demandez nexiste pas.
      </p>
      <Link to='/'>Retourner sur la page daccueil</Link>
    </div>
  )
}

export default Error
