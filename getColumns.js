
const getPageLoadWidth = () => {
  // let onLoadAllocatedWidth = document.querySelector("main").clientWidth
  let onLoadAllocatedWidth = document.querySelector("main").clientWidth
  console.log(onLoadAllocatedWidth)
  return onLoadAllocatedWidth
}
const getWidthForCols = (cols, colWidth, gap) => {
  return cols * colWidth + gap * (cols - 1)
}

const getColNumbers = (onLoadAllocatedWidth, width, gap) => {
  let leftToProcess = onLoadAllocatedWidth
  let cols = 0
  let firstIteration = true;
  while(firstIteration){
    firstIteration = false;
    cols += 1
    leftToProcess -= width
  }
  while (leftToProcess > width + gap){
    leftToProcess -= (width + gap)
    cols += 1
  }
  return cols
}
console.log(getColNumbers(getPageLoadWidth(), 120, 5))
document.querySelector("ul").style.gridTemplateColumns = `repeat(${getColNumbers(getPageLoadWidth(), 120, 5)}, 1fr)`
document.querySelector("ul").style.width = document.querySelector("ul").clientWidth
// document.querySelector("main").style.grid-template-columns = `repeat(${getColNumbers(getPageLoadWidth(), 120, 5)}, 1fr)`
