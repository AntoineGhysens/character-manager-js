
(() => {
    
    
  document.querySelector("#buttonChanges").addEventListener("click", async() => {
      const name = document.querySelector("#new-character-name").value;
      const shortDescription = document.querySelector("#shortDescription").value;
      const description = document.querySelector("#longDescription").value;
     
      if (name !== "" && shortDescription !== "" && description !== "") {
          const result = await fetch("https://character-database.becode.xyz/characters", {
              method: 'POST',
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  name: name,
                 
              })
          });
          console.log(await result.json());
      }
  });
})();




