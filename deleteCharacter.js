(() => {
    const input = document.querySelector("card")

    document.querySelector('#run').addEventListener("click", async () => {
        try {
            const response = await fetch("http://character-database.becode.xyz/characters"+input.value, {
                method: 'DELETE'
            });
            if(!response.ok) throw new Error(response.statusText)
            const getAll = await fetch('http://character-database.becode.xyz/characters')
            const data = await getAll.json()
            console.log(data)
        } catch (err) {
            alert(err)
        }
    });
})();


