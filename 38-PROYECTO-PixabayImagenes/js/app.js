const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (terminoBusqueda === "") {
    console.log("Agrega un término de Búsqueda");
    return;
  }
}

function mostrarAlerta(mensaje) {
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
    alerta.innerHTML = '<strong class=\'font-bold\'>Error!</strong><span class="block sm:inline">' + mensaje + '</span>';


    formulario.appendChild(alerta);

}
