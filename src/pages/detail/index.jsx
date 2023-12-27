import './index.scss'
import arrow_left from '../../assets/arrow_left.svg'
import arrow_right from '../../assets/arrow_right.svg'
import { useCallback, useState } from 'react'

function Detail(data) {
  const [cur, setCur] = useState(0)

  const slides = data.pictures

  const leftHandle = () => {
    setCur(cur - 1 < 0 ? slides - 1 : cur - 1)
  }

  const rightHandle = useCallback(() => {
    setCur(cur + 1 > slides - 1 ? 0 : cur + 1)
  }, [cur, slides])

  return (
    <div className='detail'>
      <div className='detail_carrousel'>
        <div className={slides.lenght > 1 ? null : 'no-picture'}>
          <img src={arrow_left} alt='arrow left' onClick={leftHandle} />
          <img src={arrow_right} alt='arrow right' onClick={rightHandle} />
          <span>
            {cur}/{slides.lenght}
          </span>
        </div>
        {slides.map((slide, index) => {
          // return <div key={index}>{cur === index && <img slide={slide} />}</div>
        })}
      </div>
    </div>
  )
}
export default Detail
