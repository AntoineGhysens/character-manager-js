(() => {
    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    const heroID = document.querySelector("#hero-id")

    document.querySelector('#run').addEventListener("click", async () => {
        const response = await fetch("http://character-database.becode.xyz/characters/"+heroID.value);
        const responseJsonFormat = await response.json()

        let cloneTemplate = document.importNode(tpl.content, true)

        cloneTemplate.querySelector('.name').textContent = responseJsonFormat.name 
        cloneTemplate.querySelector('.alter-ego').textContent = responseJsonFormat.alterEgo
        cloneTemplate.querySelector('.powers').textContent = responseJsonFormat.abilities 

        target.appendChild(cloneTemplate) 
        console.log(cloneTemplate)
    });
})();
