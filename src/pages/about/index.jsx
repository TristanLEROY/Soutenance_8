import Banner from '../../components/banner'
import BannerAboutBackground from '../../assets/banner-about.jpg'
import './index.scss'
import Collapse from '../../components/collapse'

const CollapseArrays = [
  {
    'title': 'Fiabilité',
    'p': 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    'title': 'Respect',
    'p': 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    'title': 'Service',
    'p': 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    'title': 'Securite',
    'p': "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. "
  }
]

function About() {
  const collapseInner = CollapseArrays.map((CollapseArray) => (
    <Collapse
      title={CollapseArray.title}
      p={CollapseArray.p}
      key={CollapseArray.title}
    />
  ))

  return (
    <div>
      <Banner img={BannerAboutBackground} />
      <div className='container-collapse'>{collapseInner}</div>
    </div>
  )
}

export default About
