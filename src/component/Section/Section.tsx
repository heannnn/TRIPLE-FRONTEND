import triple2x from '../../intro/images/triple2x.png'
import './Section.css'
import List from '../List/List'
import ImgText from '../ImgText/ImgText'

const TripleLogo = {
  className: 'triplelogo',
  imgSrc: triple2x,
  alt: '트리플로고',
  text: '2021년 12월 기준',
}

function Section(): React.ReactElement {
  return (
    <div className="wrapper">
      <ImgText {...TripleLogo} />
      <List />
    </div>
  )
}

export default Section
