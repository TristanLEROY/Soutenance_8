import './index.scss'
import propTypes from 'prop-types'
import DefaultPicture from '../../assets/arrow_back.svg'
import { useState } from 'react'

Collapse.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.oneOfType([propTypes.string, propTypes.array])
}

Collapse.defaultProps = {
  title: '',
  content: ''
}

ContentLi.propTypes = {
  content: propTypes.oneOfType([propTypes.string, propTypes.array])
}

ContentLi.defaultProps = {
  content: ''
}

function ContentLi({ content }) {
  return <li>{content}</li>
}

function Collapse({ content, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }
  let list
  if (Array.isArray(content)) {
    list = content.map((element, index) => (
      <ContentLi key={index} content={element} />
    ))
  }

  return (
    <div className='collapse'>
      <div className='collapse_bar'>
        <h2 className='collapse_bar--title'>{title}</h2>
        <img
          className={
            isOpen ? 'collapse_bar--img-open' : 'collapse_bar--img-close'
          }
          src={DefaultPicture}
          alt=''
          onClick={() => handleOpen()}
        />
      </div>
      {isOpen && (
        <ul
          className={
            isOpen
              ? 'collapse_p collapse_p--open'
              : 'collapse_p collapse_p--close'
          }
        >
          {list ?? content}
        </ul>
      )}
    </div>
  )
}

export default Collapse
