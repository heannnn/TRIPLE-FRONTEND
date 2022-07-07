import React from 'react'
import { useCountUp } from 'react-countup'
import './CountUp.css'

interface IcountUp {
  id: number
  end: number
  unit: string | null
  text: string | null
}

function CountUp(props: IcountUp): React.ReactElement {
  useCountUp({
    ref: props.id?.toString() || '',
    end: props.end,
  })

  return (
    <div className="item">
      <strong>
        <span id={props.id?.toString()} />
        만&nbsp;{props.unit}
      </strong>
      <div>{props.text}</div>
    </div>
  )
}

export default CountUp
