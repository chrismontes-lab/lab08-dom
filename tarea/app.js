
// Clase Tarea
class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completada = false;
    }

    // Crear y mostrar cada tarea en la página
    crearElemento(alCambiarEstado, alEliminar) {
        const elemento = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = this.descripcion;

        if (this.completada) {
            texto.classList.add("completada");
        }

        // Botón para completar o reabrir
        const btnEstado = document.createElement("button");
        btnEstado.type = "button";
        btnEstado.textContent = this.completada ? "Reabrir" : "Completar";

        btnEstado.addEventListener("click", () => {
            alCambiarEstado(this);
        });

        // Botón para eliminar
        const btnEliminar = document.createElement("button");
        btnEliminar.type = "button";
        btnEliminar.textContent = "Eliminar";

        btnEliminar.addEventListener("click", () => {
            alEliminar(this);
        });

        elemento.append(texto, btnEstado, btnEliminar);

        return elemento;
    }
}

// Seleccionar elementos del HTML
const formulario = document.querySelector("#formTarea");
const input = document.querySelector("#descripcion");
const lista = document.querySelector("#listaTareas");
const contador = document.querySelector("#contador");
const mensaje = document.querySelector("#mensaje");

// Crear objetos iniciales
const tareas = [
    new Tarea("Revisar los ejercicios del laboratorio"),
    new Tarea("Completar la bitácora")
];

// Mostrar las tareas en pantalla
function renderizarTareas() {
    lista.innerHTML = "";

    tareas.forEach((tarea) => {
        const elemento = tarea.crearElemento(
            (tareaSeleccionada) => {
                tareaSeleccionada.completada =
                    !tareaSeleccionada.completada;

                renderizarTareas();
            },

            (tareaSeleccionada) => {
                const indice = tareas.indexOf(tareaSeleccionada);

                if (indice !== -1) {
                    tareas.splice(indice, 1);
                }

                renderizarTareas();
            }
        );

        lista.appendChild(elemento);
    });

    contador.textContent = `Tareas registradas: ${tareas.length}`;
}

// Evento submit: agregar una tarea
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const descripcion = input.value.trim();

    if (descripcion === "") {
        mensaje.textContent = "Escribe una tarea antes de agregarla.";
        return;
    }

    const nuevaTarea = new Tarea(descripcion);

    tareas.push(nuevaTarea);

    input.value = "";
    mensaje.textContent = "Tarea agregada correctamente.";

    renderizarTareas();
    input.focus();
});

// Mostrar las tareas iniciales
renderizarTareas();
