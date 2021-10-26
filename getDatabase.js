// import variables from '/src/sass/_variables.scss'

const tpl = document.querySelector("#tpl-card");
const target = document.querySelector("#target");

const displayDB = async () => {
  const response = await fetch("https://character-database.becode.xyz/characters");
  const output = await response.json()
  const allChars = output
  console.log(response)
  console.log(allChars)

  // flag get db start

  allChars.forEach(character => {
    let clone = document.importNode(tpl.content, true);
    clone.querySelector(".name").textContent = character.name
    clone.querySelector(".card-short-description").textContent  = character.shortDescription
    clone.querySelector(".card-img").src = "data:image/png;base64, " +character.image
    clone.querySelector(".card-img").alt =
` image for
 ${character.name}
 not found`
    target.appendChild(clone)
  });

  // flag get db end

}

displayDB()
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
