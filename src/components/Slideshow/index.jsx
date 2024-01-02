import './index.scss'
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'
import { useCallback, useState } from 'react'
import propTypes from 'prop-types'

Carousel.propTypes = {
  pictureArray: propTypes.array.isRequired
}
Carousel.defaultProps = {
  pictureArray: []
}

function Carousel({ pictureArray }) {
  const [idx, setIdx] = useState(0)

  const handleLeftArrow = () => {
    setIdx(idx - 1 < 0 ? pictureArray.length - 1 : idx - 1)
  }

  const handleRightArrow = useCallback(() => {
    setIdx(idx + 1 > pictureArray.length - 1 ? 0 : idx + 1)
  }, [idx, pictureArray])

  const carouselImg = pictureArray.map((slide, index) => {
    return (
      <span key={index} className='carousel_div--span'>
        {idx === index && <img className='carousel_div--img' src={slide} />}
      </span>
    )
  })

  return (
    <div className='carousel'>
      <div className={pictureArray.length > 1 ? null : 'no-picture'}>
        <img
          className='carousel_arrow--left'
          src={arrow_left}
          alt='arrow left'
          onClick={handleLeftArrow}
        />
        <img
          className='carousel_arrow--right'
          src={arrow_right}
          alt='arrow right'
          onClick={handleRightArrow}
        />
        <span className='carousel_count'>
          {idx + 1}/{pictureArray.length}
        </span>
      </div>
      <div className='carousel_div'>{carouselImg}</div>
    </div>
  )
}

export default Carousel
