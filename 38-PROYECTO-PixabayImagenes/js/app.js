const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (terminoBusqueda === "") {
    mostrarAlerta("Por favor, ingresa un término de búsqueda.");
    return;
  }

buscarImagenes(terminoBusqueda);

}

function mostrarAlerta(mensaje) {

    const existeAlerta = document.querySelector(".bg-red-100");

    if (existeAlerta) {
        // Si ya existe una alerta, no necesitamos crear una nueva
        existeAlerta.querySelector('span').textContent = mensaje;
    } else {
        const alerta = document.createElement("p");
        alerta.classList.add(
            "bg-red-100",
            "border-red-100",
            "text-red-700",
            "px-4",
            "py-3",
            "rounded",
            "max-w-lg",
            "mx-auto",
            "mt-6",
            "text-center"
        );
        
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>  
        `
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

    
function buscarImagenes(termino) {
    const key = "30523531-2152215c497e522a971c7e0eb";
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}`;

    fetch(url)
    .then (response => response.json())
    .then (result => {
        mostrarImagenes(result.hits);

    }
        )
}

function mostrarImagenes(images) {
    console.log(images);
}