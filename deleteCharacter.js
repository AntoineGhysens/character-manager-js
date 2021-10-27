function myConfirm() {
  let result = confirm("Want to delete?");
  if (result==true) {
   return true;
  } else {
   return false;
  }
}

(() => {
    const input = document.querySelector("#tpl-card")

    document.querySelector('.btn-danger').addEventListener("click", async () => {
        console.log("hello");
        /*
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
        } */
    });
})();


