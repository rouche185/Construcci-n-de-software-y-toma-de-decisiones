const nombreAlumno = "Roger Peña";
const carrera = "Ingeniería en Tecnologías Computacionales";
let semestre = 5;
const materias = ["Desarrollo Web", "Ecuaciones Diferenciales", "Teoría de la Computación", "Bases de Datos"];

const alumno = {
    nombre: nombreAlumno,
    carrera: carrera,
    semestre: semestre,
    promedio: 92
};

const saludar = (nombre) => `Hola, ${nombre}. Bienvenido a tu práctica de Node.js`;

function evaluarPromedio(promedio) {
    if (promedio >= 90) {
        return "Excelente";
    } else if (promedio >= 70) {
        return "Aprobado";
    } else {
        return "Necesita mejorar";
    }
}

console.log(saludar(alumno.nombre));
console.log("Carrera:", alumno.carrera);
console.log("Semestre actual:", alumno.semestre);

console.log("\nMaterias inscritas:");
for (let i = 0; i < materias.length; i++) {
    console.log(`  ${i + 1}. ${materias[i]}`);
}

console.log("\nMaterias en mayúsculas:");
materias.forEach((materia) => console.log(`  - ${materia.toUpperCase()}`));

console.log(`\nEvaluación del promedio (${alumno.promedio}): ${evaluarPromedio(alumno.promedio)}`);

const os = require("os");
console.log(`\nEjecutando en: ${os.platform()} | Node.js ${process.version}`);
