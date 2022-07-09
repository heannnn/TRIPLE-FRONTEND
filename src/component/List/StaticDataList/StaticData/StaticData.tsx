import React from 'react'
import { useCountUp } from 'react-countup'

import './StaticData.css'

interface Idata {
  id: number
  end: number
  unit: string
  text: string
}

function StaticData(props: Idata): React.ReactElement {
  useCountUp({
    ref: props.id?.toString() || '',
    end: props.end,
  })

  return (
    <div className="data">
      <strong>
        <span id={props.id?.toString()} />
        만&nbsp;{props.unit}
      </strong>
      <div>의&nbsp;{props.text}</div>
    </div>
  )
}

export default StaticData
