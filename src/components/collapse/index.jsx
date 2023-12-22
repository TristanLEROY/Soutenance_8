import './index.scss'
import propTypes from 'prop-types'
import DefaultPicture from '../../assets/arrow_back.svg'

Collapse.propTypes = {
  title: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  p: propTypes.string.isRequired
}

Collapse.defaultProps = {
  title: '',
  picture: DefaultPicture,
  p: ''
}

function Collapse(props) {
  return (
    <div className='collapse'>
      <div className='collapse_bar'>
        <h2 className='collapse_bar--title'>{props.title}</h2>
        <img className='collapse_bar--img' src={DefaultPicture} alt='' />
      </div>
      <p className='collapse_p'> {props.p} </p>
    </div>
  )
}

export default Collapse
