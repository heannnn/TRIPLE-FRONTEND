import { useEffect, useRef } from 'react'

interface IuseInterval {
  (callback: () => void, interval: number): void
}

const useInterval: IuseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null)
  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    const id = setInterval(tick, interval)
    return () => clearInterval(id)
  }, [interval])
}

export default useInterval
