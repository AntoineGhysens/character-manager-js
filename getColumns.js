
const getPageLoadWidth = () => {
  let onLoadAllocatedWidth = document.querySelector("main").clientWidth
  return onLoadAllocatedWidth
}


const getWidthForCols = (cols, colWidth, gap) => {
  return cols * colWidth + gap * (cols - 1)
}

const getColNumbers = (onLoadAllocatedWidth, cardWidth, gap) => {
  let leftToProcess = onLoadAllocatedWidth
  let cols = 0
  let firstIteration = true;
  while(firstIteration){
    firstIteration = false;
    cols += 1
    leftToProcess -= cardWidth
  }
  while (leftToProcess > cardWidth + gap){
    leftToProcess -= (cardWidth + gap)
    cols += 1
  }
  return cols
}

// const cardContainerWidth = (cols, cardWith, gap) => {
  // return cols * (cardWidth + gap) - gap
  // return cols * width + (cols - 1) * gap
  // return cols * width + cols * gap - gap
  //
  //  + (cols - 1) * gap
// }

let computedCols = getColNumbers(getPageLoadWidth(), 270, 5)

console.log(cardContainerWidth(computedCols, 270, 5))
// console.log(getColNumbers(getPageLoadWidth(), 120, 5))
document.querySelector("ul").style.gridTemplateColumns = `repeat(${computedCols}, 1fr)`
// document.querySelector("ul").style.width = cardContainerWidth(computedCols, 270, 5)
// document.querySelector("main").style.grid-template-columns = `repeat(${getColNumbers(getPageLoadWidth(), 120, 5)}, 1fr)`
