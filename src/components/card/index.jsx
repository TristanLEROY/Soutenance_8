import propTypes from 'prop-types'
import './index.scss'
import { Link } from 'react-router-dom'

Card.propTypes = {
  Location: propTypes.object.isRequired
}
Card.defaultProps = {
  Location: {}
}

function Card(props) {
  return (
    <figure key={props.Location.id} className='card'>
      <Link to={`detail/${props.Location.id}`} className='card_link' />
      <img
        className='card_img'
        src={props.Location.pictures[0]}
        alt={props.Location.title}
      />
      <h2 className='card_title'>{props.Location.title}</h2>
    </figure>
  )
}

export default Card
