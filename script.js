function randomColor(){

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    return `rgb(${r},${g},${b})`;
}

function generateColors(){

    let palette =
        document.getElementById("palette");

    palette.innerHTML = "";

    for(let i=0;i<6;i++){

        let color = randomColor();

        let box =
            document.createElement("div");

        box.classList.add("color-box");

        box.style.backgroundColor = color;

        box.innerText = color;

        box.addEventListener("click",()=>{

            navigator.clipboard.writeText(color);

            alert(`${color} copied!`);
        });

        palette.appendChild(box);
    }
}

generateColors();