import { useState, useEffect } from 'react'
import { DEFAULT_BREAKPOINTS } from './constants'
import { getScreenSize } from './utils'

export function useResponsive() {
  const { innerHeight, innerWidth } = window || {}
  const [width, setWidth] = useState(innerWidth)
  const [height, setHeight] = useState(innerHeight)
  const [customBreakpoints, setCustomBreakpoints] = useState()

  const handleWindowWidth = () => {
    const { innerWidth, innerHeight } = window
    setWidth(innerWidth)
    setHeight(innerHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth)
    return () => {
      window.removeEventListener('resize', handleWindowWidth)
    }
  }, [])

  const defineBreakpoints = (customBreakpoints) => {
    setCustomBreakpoints(customBreakpoints)
  }

  const appBreakpoints = customBreakpoints || DEFAULT_BREAKPOINTS
  const screenSize = getScreenSize(appBreakpoints, width)
  const screenSizes = getScreenSize(appBreakpoints, width, true)
  const orientation = width > height ? 'landscape' : 'portrait'

  return {
    width,
    height,
    orientation,
    screenSize,
    screenSizes,
    defineBreakpoints,
    breakpoints: appBreakpoints
  }
}
