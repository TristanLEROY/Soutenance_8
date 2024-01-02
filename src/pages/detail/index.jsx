import './index.scss'
import propTypes from 'prop-types'
import Carousel from '../../components/Slideshow'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/collapse'
import Tags from '../../components/Tags'
import Rating from '../../components/Rating'
import { Navigate } from "react-router-dom";


Detail.propTypes = {
  data: propTypes.array.isRequired
}
Detail.defaultProps = {
  data: []
}

function Detail({ data }) {
  const { id } = useParams()
  const location = data.find((element) => element.id === id)
  if(location !== undefined){
  return (
    <section className='detail'>
      <div className='detail_carousel '>
        <Carousel pictureArray={location.pictures} />
      </div>
      <div className='detail_title '>
        <h1>{location.title}</h1>
        <p>{location.location}</p>
      </div>
      <div className='detail_host '>
        <p className='detail_host--p'>{location.host.name}</p>
        <img className='detail_host--img' src={location.host.picture} alt="image de l'hôte" />
      </div>      
      <div className='detail_tags '>
        <Tags content={location.tags} />
      </div>
      <div className='detail_star '>
        <Rating starNumber={location.rating} />
      </div>
      <div className='detail_collapse '>
        <Collapse title='Description' content={location.description} />
        <Collapse title='Équipments' content={location.equipments} />
      </div>
    </section>
  )
} else {
  
  return(
    <Navigate to="*" replace={true} />)
}
}

export default Detail
