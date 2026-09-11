document.addEventListener("DOMContentLoaded", function () {
    inicializarLogin();
    inicializarPerfil();
    inicializarDemostracionJS();
});

const USUARIOS_VALIDOS = [
    { usuario: "admin", contrasena: "1234" },
    { usuario: "roger", contrasena: "tec2026" }
];

function inicializarLogin() {
    const formLogin = document.querySelector("form");
    const campoUsuario = document.getElementById("username");
    const campoContrasena = document.getElementById("password");
    const checkRecordar = document.getElementById("recordar");

    if (!formLogin || !campoUsuario || !campoContrasena) return;

    let alertaError = document.getElementById("alerta-login");
    if (!alertaError) {
        alertaError = document.createElement("div");
        alertaError.id = "alerta-login";
        alertaError.className = "alert alert-danger d-none mt-3";
        alertaError.setAttribute("role", "alert");
        formLogin.appendChild(alertaError);
    }

    const usuarioGuardado = localStorage.getItem("usuarioRecordado");
    if (usuarioGuardado) {
        campoUsuario.value = usuarioGuardado;
        if (checkRecordar) checkRecordar.checked = true;
    }

    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const usuarioIngresado = campoUsuario.value.trim();
        const contrasenaIngresada = campoContrasena.value;

        const credencialValida = USUARIOS_VALIDOS.some(
            (u) => u.usuario === usuarioIngresado && u.contrasena === contrasenaIngresada
        );

        if (credencialValida) {
            if (checkRecordar && checkRecordar.checked) {
                localStorage.setItem("usuarioRecordado", usuarioIngresado);
            } else {
                localStorage.removeItem("usuarioRecordado");
            }

            sessionStorage.setItem("usuarioActivo", usuarioIngresado);

            alertaError.classList.add("d-none");
            window.location.href = "profile.html";
        } else {
            alertaError.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo.";
            alertaError.classList.remove("d-none");
        }
    });
}


function inicializarPerfil() {
    const listaDatos = document.getElementById("lista-datos-generales");
    const botonCerrarSesion = document.querySelector('a[href="index.html"].btn-outline-primary');

    if (!listaDatos) return;

    const usuarioActivo = sessionStorage.getItem("usuarioActivo");
    if (usuarioActivo) {
        const primerDato = listaDatos.querySelector("li");
        if (primerDato) {
            primerDato.innerHTML = `<strong>Nombre:</strong> ${usuarioActivo}`;
        }
    }

    if (botonCerrarSesion) {
        botonCerrarSesion.addEventListener("click", function () {
            sessionStorage.removeItem("usuarioActivo");
        });
    }
}

function inicializarDemostracionJS() {
    let contador = 0;
    const botonContador = document.getElementById("btn-contador");
    const valorContador = document.getElementById("valor-contador");
    if (botonContador && valorContador) {
        botonContador.addEventListener("click", function () {
            contador++;
            valorContador.textContent = contador;
        });
    }

    const saludos = [
        "¡Sigue así, vas muy bien!",
        "El JavaScript cada vez se te da mejor.",
        "Recuerda repasar var, let y const.",
        "Un array y un objeto no son lo mismo, pero se complementan",
        "Los eventos de clic son la base de la interactividad web.",
        "Si ve esto profe pongame 100 porfa."
    ];
    const botonSaludo = document.getElementById("btn-saludo");
    const textoSaludo = document.getElementById("texto-saludo");
    if (botonSaludo && textoSaludo) {
        botonSaludo.addEventListener("click", function () {
            const indiceAleatorio = Math.floor(Math.random() * saludos.length);
            textoSaludo.textContent = saludos[indiceAleatorio];
        });
    }

    const botonFecha = document.getElementById("btn-fecha");
    const textoFecha = document.getElementById("texto-fecha");
    if (botonFecha && textoFecha) {
        botonFecha.addEventListener("click", function () {
            const ahora = new Date();
            textoFecha.textContent = ahora.toLocaleString("es-MX", {
                dateStyle: "long",
                timeStyle: "short"
            });
        });
    }

    const botonTema = document.getElementById("btn-tema");
    if (botonTema) {
        botonTema.addEventListener("click", function () {
            document.body.classList.toggle("tema-oscuro");
            const activo = document.body.classList.contains("tema-oscuro");
            botonTema.textContent = activo ? "Tema claro" : "Tema oscuro";
        });
    }
}
