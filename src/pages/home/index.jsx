/* eslint-disable react/prop-types */
import Banner from '../../components/banner'
import Card from '../../components/card'
import BannerHomeBackground from '../../assets/banner-home.jpg'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function NavigateDetail(data) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/detail/:${data}`)
  })
}

function Home({ data }) {
  const cardList = data.map((Location) => (
    <Card
      onClick={NavigateDetail(Location.id)}
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
