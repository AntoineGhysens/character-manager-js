// (() => {
//       const success = () => {
//       console.log(
//         "%c ADD WITH SUCCESS ! ",
//         "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113);"
//       )};
//
//     const error = () => {
//         console.log('%c Error', 'font-weight: bold; font-size: 50px; color: red')
//     }
//
//     const inputName = document.querySelector("#hero-name");
//     const inputAlterEgo = document.querySelector("#hero-alter-ego");
//     const inputPower = document.querySelector("#hero-powers");
//
//     document.querySelector("#run").addEventListener("click", async () => {
//       try {
//         let abilities = inputPower.value.split(",");
//         const res = await fetch("http://localhost:3000/heroes", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: inputName.value,
//             alterEgo: inputAlterEgo.value,
//             abilities: abilities,
//           }),
//         });
//         if(!res.ok) throw new Error(res.statusText)
//         const getAll = await fetch("http://localhost:3000/heroes");
//         if(!getAll.ok) throw new Error(getAll.statusText)
//         success();
//         console.log(await getAll.json());
//       } catch (err) {
//           error()
//           console.error('Something went WRONG !',err);
//       }
//     });
//   })();



// var request = new XMLHttpRequest();
// request.open('GET', '/my/url', true);
//
// request.onload = function() {
//   if (this.status >= 200 && this.status < 400) {
//     // Success!
//     var data = JSON.parse(this.response);
//   } else {
//     // We reached our target server, but it returned an error
//
//   }
// };
//
// request.onerror = function() {
//   // There was a connection error of some sort
// };
//
// request.send();
//



const tpl = document.querySelector("#tpl-card");
const target = document.querySelector("#target");

(() => {
      const success = () => {
      console.log(
        "%c ADD WITH SUCCESS ! ",
        "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113);"
      );
    };
  
    const error = () => {
        console.log('%c Error', 'font-weight: bold; font-size: 50px; color: red')
    }
  
    const inputName = document.querySelector("#name");
    const inputAlterEgo = document.querySelector("#placeDescription");
    const inputPower = document.querySelector("#hero-powers");
  
    document.querySelector("#run").addEventListener("click", async () => {
      try {
        let abilities = inputPower.value.split(",");
        const res = await fetch("http://character-database.becode.xyz/characters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: inputName.value,
            alterEgo: inputAlterEgo.value,
            abilities: abilities,
          }),
        });
        if(!res.ok) throw new Error(res.statusText)
        const getAll = await fetch("http://character-database.becode.xyz/characters");
        if(!getAll.ok) throw new Error(getAll.statusText)
        success();
        console.log(await getAll.json());
      } catch (err) {
          error()
          console.error('Something went WRONG !',err);
      }
    });
  })();
