import propTypes from 'prop-types'
import './index.scss'

Banner.propTypes = {
  title: propTypes.string,
  img: propTypes.string.isRequired
}

Banner.defaultProps = {
  title: '',
  img: ''
}

function Banner(props) {
  return (
    <div className='banner'>
      <h1 className='banner_title'>{props.title}</h1>
      <img className='banner_img' src={props.img} alt={props.title} />
    </div>
  )
}

export default Banner
