const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const resgistrosPorPagina = 40;
let totalPaginas;
let iterador;

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
    existeAlerta.querySelector("span").textContent = mensaje;
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
        `;
    formulario.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes(termino) {
  const key = "30523531-2152215c497e522a971c7e0eb";
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=54`;

  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      totalPaginas = calcularPaginas(result.totalHits);

      mostrarImagenes(result.hits);
    });
}

//*Generador que va a registrar la cantidad de elementos.

function *crearPaginador(total) {
  console.log(total);
  for (let i = 1 ; i <= total ; i++) {
  yield i;

  }
  
}


function calcularPaginas(total) {
  return parseInt(Math.ceil(total / resgistrosPorPagina));
}

function mostrarImagenes(images) {
  const result = document.querySelector("#resultado");

  // Vaciar contenido anterior
  result.innerHTML = "";

  images.forEach((image) => {
    const { previewURL, likes, views, largeImageURL } = image;
    result.innerHTML += `
      <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 mb-4">
  <div class="bg-white shadow-md rounded-md overflow-hidden">
    <img class="w-full h-48 object-cover" src="${previewURL}" alt="Imagen">
    <div class="p-4">
      <p class="text-lg font-bold">${likes} Me gusta</p>
      <p class="text-lg font-bold">${views} Vistas</p>
      <a href="${largeImageURL}" target="_blank" rel="noopener" class="inline-block mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md transition duration-300">Ver imagen</a>
    </div>
  </div>
</div>


      `;
  });

imprimirPaginador();

}

function imprimirPaginador() {
  iterador = crearPaginador(totalPaginas);
}