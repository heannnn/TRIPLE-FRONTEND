import React from 'react'
import './ImgText.css'
import classnames from 'classnames'

interface IimgText {
  className: string
  imgSrc: string
  alt: string
  text: string
}

function ImgText(props: IimgText): React.ReactElement {
  return (
    <div className={classnames(props.className)}>
      <img src={props.imgSrc} alt={props.alt} />
      <p>{props.text}</p>
    </div>
  )
}

export default ImgText
