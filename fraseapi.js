const frase = document.getElementById("frase");
const autor = document.getElementById("autor");
const btnFrase = document.getElementById("btn-frase");


//api con generador de frases
let fraseRandom  = () => {
  fetch("https://api.quotable.io/random")
    .then((data) => data.json())
    .then((item) => {
      frase.innerText = item.content;
      autor.innerText = item.author;
    });
};

// boton para obtener frases random
btnFrase.addEventListener("click", fraseRandom);

