import './index.scss'
import propTypes from 'prop-types'
import DefaultPicture from '../../assets/arrow_back.svg'
import {useState} from 'react'

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

function ContentLi({content}) {
    return <li className='collapse_p--li'>{content}</li>
}

function Collapse({content, title}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    const handleOpen = () => {
        setIsOpen(!isOpen)
        if (isFirstLoad) {
            setIsFirstLoad(false)
        }
    };

    let list
    if (Array.isArray(content)) {
        list = content.map((element, index) => (
            <ContentLi key={index} content={element}/>
        ))
    }

    return (
        <div className='collapse'>
            <div className='collapse_bar'>
                <h2 className='collapse_bar--title'>{title}</h2>
                <img
                    className={`collapse_bar--img ${isOpen ? 'collapse_bar--img-open' : isFirstLoad ? '' : 'collapse_bar--img-close'}`}
                    src={DefaultPicture}
                    alt=''
                    onClick={() => handleOpen()}
                />
            </div>
            <ul className={
                isFirstLoad
                    ? 'collapse_p collapse_p--close-noanimation' 
                    : isOpen
                        ? 'collapse_p collapse_p--open'
                        : 'collapse_p collapse_p--close'
            }>
                {list ?? content}
            </ul>
        </div>
    )
}

export default Collapse