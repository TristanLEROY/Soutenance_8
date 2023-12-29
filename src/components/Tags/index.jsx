import propTypes from 'prop-types'
import './index.scss'

Tags.propTypes = {
  content: propTypes.array.isRequired
}

Tags.defaultProps = {
  content: []
}

function Tags({ content }) {
  const TagsContent = content.map((element, index) => (
    <span className='tags_span' key={index}>{element}</span>
  ))

  return <div className='tags'>{TagsContent}</div>
}

export default Tags
