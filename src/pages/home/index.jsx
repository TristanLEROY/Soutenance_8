/* eslint-disable react/prop-types */
import Banner from '../../components/banner'
import Card from '../../components/card'
import BannerHomeBackground from '../../assets/banner-home.jpg'
import './index.scss'
import propTypes from 'prop-types'

Home.propTypes = {
  data: propTypes.array.isRequired
}
Home.defaultProps = {
  data: []
}

function Home({ data }) {
  const cardList = data.map((Location) => (
    <Card Location={Location} key={Location.id} />
  ))

  const Bannerconst = (
    <Banner
      title='Chez vous, partout et ailleurs.'
      img={BannerHomeBackground}
    />
  )

  return (
    <div className='home_container'>
      {Bannerconst}
      <div className='container-card'>{cardList}</div>
    </div>
  )
}

export default Home
