document.getElementById('buttonDeleteCharacter').addEventListener("click", async () => {
    let action = confirm('Are you sure you want to delete this character');
  
    if (action != true) {
      console.log("action aborted nothing deleted");
    } else {
      const result = await fetch('https://character-database.becode.xyz/characters/${characterId}', {
              method: 'DELETE',
          });
          window.location.href = "index.html"
          console.log("Deleted")
    }
  }); 
  