import React from 'react'

import badgeApple4x from '../../../intro/images/badge-apple4x.png'
import playStore2x from '../../../intro/images/play-store2x.png'
import ImgText from '../../ImgText/ImgText'

import './StoreList.css'

const PlayStore = {
  className: 'store',
  imgSrc: playStore2x,
  alt: '플레이스토어',
  text: '2018 구글 플레이스토어\n올해의 앱 최우수상 수상',
}

const AppStore = {
  className: 'store',
  imgSrc: badgeApple4x,
  alt: '앱스토어',
  text: '2018 애플 앱스토어\n오늘의 여행앱 선정',
}

function StoreList(): React.ReactElement {
  return (
    <div className="storelist">
      <ImgText {...PlayStore} />
      <ImgText {...AppStore} />
    </div>
  )
}

export default StoreList
