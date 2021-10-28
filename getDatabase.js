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
  })
}

const displayDB = async () => {


  const response = await fetch("https://character-database.becode.xyz/characters");
  const output = await response.json()
  const allChars = output
  console.log(allChars)
  cardGen(allChars)
  // flag cardgen



  const cardBtnAll = document.querySelectorAll(".card-btn")
  cardBtnAll.forEach(button => {
    button.addEventListener("click", async() => {
      let characterCardClone = document.importNode(button.parentElement, true)
      console.log(characterCardClone.id)

      // localStorage["characterId"] = characterCardClone.id
      localStorage.setItem('characterId', characterCardClone.id)
    })
  })




}

displayDB()
