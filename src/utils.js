export const getScreenSize = (breakpoints, width, allSizes) => {
  const inArray = []
  for (const key in breakpoints) {
    const point = {
      key,
      size: breakpoints[key]
    }
    inArray.push(point)
  }

  const below = inArray.filter(({ size }) => size <= width)

  if (allSizes) {
    return below
  }

  const { key } = below[below.length - 1]

  return key
}
