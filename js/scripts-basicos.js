let paginaCarta = "carta.html";
let botonTraerPaginaCarta = document.querySelector(".botonTraerPagina");
let transicion = document.querySelector(".transicion");
let soundMananitas = new Audio("./audio/taylor.mp3");
let soundEfecto = new Audio("./audio/sonidoClick.mp3");
let soundAmbiente = new Audio("./audio/taylor.mp3");
let sondEfectoConfetti = new Audio("./audio/efectoConfetti.mp3");

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  const aparecerBoton = setTimeout(() => {
    botonTraerPaginaCarta.classList.remove("desaparecido");
    clearTimeout(aparecerBoton);
  }, 8000);
  const quitarInvisible = setTimeout(() => {
    botonTraerPaginaCarta.classList.remove("invisible");
    clearTimeout(quitarInvisible);
  }, 9000);
};

document.addEventListener("DOMContentLoaded", function () {
  soundAmbiente.play().catch(function (error) {
    console.error("Error al reproducir el audio:", error);
  });
});

botonTraerPaginaCarta.addEventListener("click", () => {
  aparecerPagina = setTimeout(() => {
    fetch(paginaCarta)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Error al cargar el archivo HTML: " + response.status
          );
        }
        return response.text();
      })
      .then((html) => {
        // Colocar el contenido del archivo HTML dentro del div con id "contenido"
        document.getElementById("contenido").innerHTML = html;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    clearTimeout(aparecerPagina);
  }, 2000);

  const ocultarBoton = () => {
    botonTraerPaginaCarta.classList.add("desaparecido");
  };

  const apareceTransicion = setTimeout(() => {
    transicion.classList.remove("ocultarTransicion");
    clearTimeout(apareceTransicion);
    ocultarBoton();
    const ocultarTramsicion = setTimeout(() => {
      transicion.classList.add("ocultarTransicion");
      clearTimeout(ocultarTramsicion);
      const quitarTransicion = setTimeout(() => {
        transicion.classList.add("quitarTransicion");
        clearTimeout(quitarTransicion);

        confetti({
          particleCount: 170,
          spread: 190,
          origin: { y: 0.8 },
          decay: 0.9,
        });
        let sondEfectoConfetti1 = new Audio("./audio/efectoConfetti.mp3");
        sondEfectoConfetti1.play();

        const dinoConfetti = document.querySelector(".dinoBTNConfetti");
        dinoConfetti.addEventListener("click", () => {
          confetti({
            particleCount: 170,
            spread: 200,
            origin: { x: 0.5, y: 0.8 },
            decay: 0.9,
            angle: 90,
            gravity: 0.5,
            ticks: 200,
          });
          let sondEfectoConfettibtn = new Audio("./audio/efectoConfetti.mp3");
          sondEfectoConfettibtn.play();
        });
      }, 1500);
      soundMananitas.currentTime = 0.5;
      soundMananitas.play();

      let sondEfectoConfetti2 = new Audio("./audio/efectoConfetti.mp3");
      sondEfectoConfetti2.play();
      confetti({
        particleCount: 170,
        spread: 190,
        origin: { y: 0.8 },
        decay: 0.9,
      });
    }, 1700);
  }, 400);
  soundEfecto.play();
  transicionAudio(soundAmbiente);
});

const transicionAudio = (audio) => {
  transicionIntervalo = setInterval(() => {
    if (audio.volumen > 0.1) {
      audio.volumen -= 0.1;
    } else {
      audio.pause();
      clearInterval(transicionIntervalo);
    }
  }, 1000);
};
