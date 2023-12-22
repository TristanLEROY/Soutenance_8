import Banner from '../../components/banner'
import Card from '../../components/card'
import Locations from '../../data/data.json'
import BannerHomeBackground from '../../assets/banner-home.jpg'
import './index.scss'

function Home() {
  const cardList = Locations.map((Location) => (
    <Card
      title={Location.title}
      pictures={Location.pictures[0]}
      key={Location.id}
    />
  ))

  const Bannerconst = (
    <Banner
      title='Chez vous, partout et ailleurs.'
      img={BannerHomeBackground}
    />
  )

  return (
    <div>
      {Bannerconst}
      <div className='container-card'>{cardList}</div>
    </div>
  )
}

export default Home
