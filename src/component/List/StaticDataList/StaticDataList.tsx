import React from 'react'

import './StaticDataList.css'
import StaticData from './StaticData/StaticData'

const datas = [
  {
    id: 1,
    end: 400,
    duration: 2000,
    unit: '명',
    text: '여행자',
  },
  {
    id: 2,
    end: 100,
    duration: 2000,
    unit: '개',
    text: '리뷰',
  },
  {
    id: 3,
    end: 200,
    duration: 2000,
    unit: '개',
    text: '여행일정',
  },
]

function StaticDataList(): React.ReactElement {
  return (
    <div className="datas">
      {datas?.map((data) => (
        <StaticData key={data.id} {...data} />
      ))}
    </div>
  )
}

export default StaticDataList
