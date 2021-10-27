let currentBase64;
let base64Split;
const imageToBase64 = (element) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    currentBase64 = reader.result;
    base64Split = currentBase64.split(",")[1];  
};
reader.readAsDataURL(file);
};







const src = "https://character-database.becode.xyz/characters";

  document.querySelector("#buttonChanges").addEventListener("click", async() => {
    
      const name = document.querySelector("#new-character-name").value;
      const shortDescription = document.querySelector("#shortDescription").value;
      const description = document.querySelector("#description").value; 
      
     
    
          const result = await fetch(src, {
              
              method: 'POST',
              headers: {
                  "Content-Type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify({
                  name: name,
                  shortDescription: shortDescription,
                  description: description,
                  image: image

                 
              })
          });
          console.log(await result.json()); 
          
});


/*

const regeneratorRuntime = require("regenerator-runtime/runtime");

const recievedImage = document.querySelector("#new-image");
const recievedName = document.getElementById("new-name");
const recievedShortDescription = document.querySelector("#shortDescription");
const recievedDescription = document.querySelector("#markdown");
const imageUpload = document.getElementById("user-image");
const beCodeUrl = https://character-database.becode.xyz/characters%60;

let currentBase64;
let base64Split;
const imageToBase64 = (element) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    currentBase64 = reader.result;
    // console.log(currentBase64)
    // imageDisplay.src = currentBase64;
    // tempoImage.src = currentBase64;
    // tempoContainer.append(tempoImage);
    // actionDiv.append(tempoContainer);
    base64Split = currentBase64.split(",")[1]; //picking only the base 64 without the haders but this seems to be unnessesary it works well with out split
  };
  reader.readAsDataURL(file);
};

let newCharacterObject = {};

document.querySelector("#submit").addEventListener("click", async () => {
  event.preventDefault();

  newCharacterObject.name = recievedName.value;
  newCharacterObject.shortDescription = recievedShortDescription.value;
  newCharacterObject.description = recievedDescription.value;
  newCharacterObject.image = base64Split; //currentBase64;

  fetch(beCodeUrl, {
    method: "post",
    body: JSON.stringify(newCharacterObject),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  });

  console.log(newCharacterObject);
  // }

  console.log("i am the submit button");
});

imageUpload.addEventListener("change", imageToBase64);`

Envoyer un message à @Fradven
