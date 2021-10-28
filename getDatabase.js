const tpl = document.querySelector("#tpl-card");
const target = document.querySelector("#target");
const cardGen = (array) => {
  let index = 0
  array.forEach(character => {
    const cardContent = document.importNode(tpl.content, true);
    cardContent.querySelector(".card-name").textContent = character.name
    cardContent.querySelector(".card-short-description").textContent  = character.shortDescription
    cardContent.querySelector(".card-description-main-page").textContent  = character.description
    cardContent.querySelector(".card-img-view-all").src = "data:image/png;base64, " +character.image
    cardContent.querySelector(".card-img-view-all").alt =
` image for
 ${character.name}
 not found`
    cardContent.children[0].id = character.id
    cardContent.children[0].children[4].id = `btn-${index}`
    index += 1
    target.appendChild(cardContent)
    // console.log(cardContent.children.children)
  })
}


const displayDB = async () => {
  const response = await fetch("https://character-database.becode.xyz/characters");
  const output = await response.json()
  const allChars = output
  cardGen(allChars)
}

displayDB()

  let charIndex = 0
  // let currentItem = ce sur quoi je clique
  // loop previousElementSibling == null
  // if(currentItem.previousElementSibling == null){
  //   charIndex += 1
  //   currentItem = currentItem.previousElementSibling
  // }
  // const btn0 = document.querySelector("#btn-0")
  // const btn = document.querySelectorAll(".card-btn")
  // console.log(btn)
  // const btnIndex = (i) => {
  //   return btn[i].id.slice(4)
    // btn[1].id.slice(4)
  // }
  // console.log(parseInt(btn[1].id.slice(4)))
  // btn0.addEventListener("click", async() => {
    // const selectedCard =  document.importNode(btn0.parentElement, true)
    // target.appendChild(selectedCard)
  // btn.addEventListener("click", async() => {
    // var classList =
    // const selectedCard =  document.importNode(btn.parentElement, true)
    // console.log(btn0.parentElement)
  // });



// const funk = () => {
//   return 1
// }
//
// if(button.onclick){
//   console.log(funk())
// }
//
// const onButtonPress = (element) => {
//   if(element){
//     return true
//   }
// }
//
// const expandItem = (element) => {
//   if(onButtonPress(element)){
//     console.log("hello world")
//   }
// }
//
// expandItem(button)

  // console.log(currentMainWidth)
  // let calculatedColumns = 1
  // let width = 100
  // let calculatedWidth = 0
  // let gap = 5
  // function calcCol(inputWidth){
  //   if(inputWidth + gap + width > currentMaxWidth){
  //     return
  //   }
      //   calculatedColumns += 1
      //   calculatedWidth += width
      //   return calcCol(yourWidth - calculatedWidth) yourWidth * calculatedColumns + gap * (calculatedColumns-1)




  // <img class="card-img" src="data:image/png;base64, ... " alt="Red dot" />

// const dbChar = await response.json()
//
//       let n = dbChar.length
//       dbChar.forEach(character => {
//         let clone = document.importNode(tpl.content, true);
//         clone.querySelector(".name").textContent = character.name

      // for(i = 1; i <= n; i++){
      //   clone.querySelector(".name").textContent = hero.name
      // }
      // output.forEach(hero => {
      //   let clone = document.importNode(tpl.content, true);
      //   clone.querySelector(".name").textContent = hero.name;
      //   clone.querySelector(".alter-ego").textContent = hero.alterEgo;
      //   clone.querySelector(".powers").textContent = hero.abilities;
      //   target.appendChild(clone)
      // });


// flag


// let articlesHeight = [];
// let article0 = articlesHeight.push(document.querySelectorAll(".tour-schedule__dates-for-month__available-dates__item")[0].clientHeight);
