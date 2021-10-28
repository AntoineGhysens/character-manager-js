
const tpl = document.querySelector("#tpl-card");
const target = document.querySelector("#target");
for (let item of document.querySelectorAll(".viewMore")) {
    item.addEventListener("click", () => {

    let id = item.id;
    const cardContent = getSpecificPost(id);
    cardContent.children[0].id = id;
    cardContent.querySelector(".name").textContent = character.name;
    cardContent.querySelector(".card-short-description").textContent = character.shortDescription;
    cardContent.querySelector(".card-description").innerHTML = character.description;
    cardContent.querySelector(".card").src = `data:image;base64,${character.image}`;
    cardContent.querySelector(".card-img").alt =` image for${character.name}not found`
    cardContent.children[0].id = character.id
    cardContent.appendChild(document.createElement('a'))
    cardContent.children[0].children[4].id = `btn-${index}`
    index += 1
    target.appendChild(cardContent)

    });
}

