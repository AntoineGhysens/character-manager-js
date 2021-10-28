let imgInput = document.getElementById('file-ip-1');
imgInput.addEventListener('change', function (e) {
    if (e.target.files) {
        let imageFile = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let img = document.createElement("img");
            img.onload = function (event) {
                // Dynamically create a canvas element
                let canvas = document.createElement("canvas");
                canvas.width = 100;
                canvas.height = 100;

                // var canvas = document.getElementById("canvas");
                let ctx = canvas.getContext("2d");
                // Actual resizing
                ctx.drawImage(img, 0, 0, 100, 100);

                // Show resized image in preview element
                let dataurl = canvas.toDataURL(imageFile.type, 1);
                document.getElementById("image").src = dataurl;

            }
            img.src = e.target.result;
            document.getElementById("image").style.display = 'block';
        }
        reader.readAsDataURL(imageFile);

    }
});


const src = "https://character-database.becode.xyz/characters";

document.querySelector("#buttonChanges").addEventListener("click", async () => {

    const name = document.querySelector("#new-character-name").value;
    const shortDescription = document.querySelector("#shortDescription").value;
    const description = document.querySelector("#description").value;
    const image = document.querySelector("#image").src.slice(23, document.querySelector("#image").src.lenght);



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


