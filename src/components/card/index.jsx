import propTypes from 'prop-types'
import './index.scss'

Card.propTypes = {
  title: propTypes.string.isRequired,
  pictures: propTypes.string.isRequired,
  id: propTypes.string.isRequired
}
Card.defaultProps = {
  title: '',
  pictures: '',
  id: ''
}

function Card(props) {
  return (
    <figure className='card' key={props.id}>
      <img className='card_img' src={props.pictures} alt={props.title} />
      <h2 className='card_title'>{props.title}</h2>
    </figure>
  )
}

export default Card
