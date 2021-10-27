// import variables from '/src/sass/_variables.scss'

const tpl = document.querySelector("#tpl-card");
const target = document.querySelector("#target");

const displayDB = async () => {
  const response = await fetch("https://character-database.becode.xyz/characters");
  const output = await response.json()
  const allChars = output
  // console.log(response)
  console.log(allChars)

  allChars.forEach(character => {
    let clone = document.importNode(tpl.content, true);
    clone.querySelector(".name").textContent = character.name
    clone.querySelector(".card-short-description").textContent  = character.shortDescription
    clone.querySelector(".card-description").textContent  = character.description
    clone.querySelector(".card-img").src = "data:image/png;base64, " +character.image
    clone.querySelector(".card-img").alt =
` image for
 ${character.name}
 not found`
    clone.children[0].id = character.id
    target.appendChild(clone)
  });
}

const button = document.querySelector(".card-btn")

displayDB()

console.log(document.querySelector(".card-btn"))

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
