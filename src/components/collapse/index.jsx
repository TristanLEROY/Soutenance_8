import './index.scss'
import propTypes from 'prop-types'
import DefaultPicture from '../../assets/arrow_back.svg'
import { useState } from 'react'

Collapse.propTypes = {
  title: propTypes.string.isRequired,
  p: propTypes.string.isRequired
}

Collapse.defaultProps = {
  title: '',
  p: ''
}

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='collapse'>
      <div className='collapse_bar'>
        <h2 className='collapse_bar--title'>{props.title}</h2>
        <img
          className={
            isOpen ? 'collapse_bar--img-open' : 'collapse_bar--img-close'
          }
          src={DefaultPicture}
          alt=''
          onClick={() => handleOpen()}
        />
      </div>
      {isOpen && (
        <p
          className={
            isOpen
              ? 'collapse_p collapse_p--open'
              : 'collapse_p collapse_p--close'
          }
        >
          {' '}
          {props.p}{' '}
        </p>
      )}
    </div>
  )
}

export default Collapse
