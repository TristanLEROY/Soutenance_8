import propTypes from 'prop-types'
import './index.scss'

Rating.propTypes = {
  starNumber: propTypes.string.isRequired
}

Rating.defaultProps = {
  starNumber: ''
}

Star.propTypes = {
  isEmpty: propTypes.bool.isRequired
}

Star.defaultProps = {
  isEmpty: true
}

function Star({ isEmpty }) {
  return (
    <svg
      className={isEmpty ? 'star_style star_style--without' : 'star_style star_style--color'}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 22 20'
    >
      <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
    </svg>
  )
}

function Rating({ starNumber }) {
  const starsArray = [1, 2, 3, 4, 5]
  const stars = starsArray.map(( index ) => {
    if (index  <= Number(starNumber)) {
      return <Star key={index} isEmpty={false} className='test'/>
    } else {
      return <Star key={index} isEmpty={true} className='test'/>
    }
  })  
  return (<div className='star'>{stars}</div>)
}

export default Rating
