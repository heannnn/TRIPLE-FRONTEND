import React from 'react'

import triple2x from './intro/images/triple2x.png'
import CountUp from './component/CountUp'
import './App.css'

function App(): React.ReactElement {
  const staticData = [
    {
      id: 1,
      end: 400,
      duration: 2000,
      unit: '명',
      text: '의 여행자',
    },
    {
      id: 2,
      end: 100,
      duration: 2000,
      unit: '개',
      text: '의 리뷰',
    },
    {
      id: 3,
      end: 200,
      duration: 2000,
      unit: '개',
      text: '의 여행일정',
    },
  ]

  return (
    <div className="wrapper">
      <img className="tripleImg" src={triple2x} alt="2021년 12월 기준" />
      <div className="list">
        {staticData?.map((item) => (
          <CountUp key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default App
