document.addEventListener("DOMContentLoaded", function () {
    inicializarRadios();
    inicializarPaisRegion();
    inicializarCheckboxes();
    inicializarEnvioFormulario();
});

function inicializarRadios() {
    const radios = document.querySelectorAll('input[name="tipoUsuario"]');
    const botonContinuar = document.getElementById("btn-continuar");

    const contenidos = {
        estudiante: document.getElementById("contenidoEstudiante"),
        docente: document.getElementById("contenidoDocente"),
        administrador: document.getElementById("contenidoAdministrador")
    };

    if (radios.length === 0) return;

    radios.forEach((radio) => {
        radio.addEventListener("change", function () {
            Object.values(contenidos).forEach((div) => div && div.classList.add("d-none"));

            const seleccionado = contenidos[radio.value];
            if (seleccionado) seleccionado.classList.remove("d-none");

            if (botonContinuar) botonContinuar.disabled = false;
        });
    });
}

function inicializarPaisRegion() {
    const selectPais = document.getElementById("selectPais");
    const selectRegion = document.getElementById("selectRegion");

    if (!selectPais || !selectRegion) return;

    const datos = window.paisesRegiones || [];

    datos.forEach((pais, indice) => {
        const opcion = document.createElement("option");
        opcion.value = indice; 
        opcion.textContent = pais.countryName;
        selectPais.appendChild(opcion);
    });

    selectPais.addEventListener("change", function () {
        selectRegion.innerHTML = "";

        if (selectPais.value === "") {
            const opcionInicial = document.createElement("option");
            opcionInicial.textContent = "Primero elige un país...";
            selectRegion.appendChild(opcionInicial);
            selectRegion.disabled = true;
            return;
        }

        const paisElegido = datos[Number(selectPais.value)];

        const opcionInicial = document.createElement("option");
        opcionInicial.value = "";
        opcionInicial.textContent = "Selecciona una región...";
        selectRegion.appendChild(opcionInicial);

        paisElegido.regions.forEach((region) => {
            const opcion = document.createElement("option");
            opcion.value = region.shortCode;
            opcion.textContent = region.name;
            selectRegion.appendChild(opcion);
        });

        selectRegion.disabled = false;
    });
}

function inicializarCheckboxes() {
    const checkTerminos = document.getElementById("checkTerminos");
    const checkConfirmacion = document.getElementById("checkConfirmacion");
    const botonEnviar = document.getElementById("btn-enviar");

    if (!checkTerminos || !checkConfirmacion || !botonEnviar) return;

    function actualizarBotonEnviar() {
        botonEnviar.disabled = !(checkTerminos.checked && checkConfirmacion.checked);
    }

    checkTerminos.addEventListener("change", actualizarBotonEnviar);
    checkConfirmacion.addEventListener("change", actualizarBotonEnviar);
}


function inicializarEnvioFormulario() {
    const formulario = document.getElementById("form-registro");
    const alertaEnvio = document.getElementById("alerta-envio");

    if (!formulario) return;

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const tipoUsuario = document.querySelector('input[name="tipoUsuario"]:checked');
        const selectPais = document.getElementById("selectPais");
        const selectRegion = document.getElementById("selectRegion");

        const textoTipo = tipoUsuario ? tipoUsuario.value : "sin especificar";
        const textoPais = selectPais && selectPais.selectedOptions[0] ? selectPais.selectedOptions[0].textContent : "sin especificar";
        const textoRegion = selectRegion && selectRegion.selectedOptions[0] ? selectRegion.selectedOptions[0].textContent : "sin especificar";

        if (alertaEnvio) {
            alertaEnvio.textContent = `¡Formulario enviado! Tipo de usuario: ${textoTipo}. Ubicación: ${textoRegion}, ${textoPais}.`;
            alertaEnvio.classList.remove("d-none");
        }
    });
}
