# Tarea: Mi componente interactivo

## Componente elegido

Se desarrolló una lista de tareas interactiva utilizando JavaScript, HTML y manipulación del DOM.

El componente permite agregar nuevas tareas, marcarlas como completadas, reabrirlas y eliminarlas. Además, muestra dinámicamente la cantidad de tareas registradas.

## Código principal

```javascript
// Clase Tarea
class Tarea {
    constructor(descripcion) {
        this.descripcion = descripcion;
        this.completada = false;
    }

    crearElemento(alCambiarEstado, alEliminar) {
        const elemento = document.createElement("li");

        const texto = document.createElement("span");
        texto.textContent = this.descripcion;

        if (this.completada) {
            texto.classList.add("completada");
        }

        const btnEstado = document.createElement("button");
        btnEstado.type = "button";
        btnEstado.textContent = this.completada ? "Reabrir" : "Completar";

        btnEstado.addEventListener("click", () => {
            alCambiarEstado(this);
        });

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

// Mostrar las tareas
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

// Mostrar tareas iniciales
renderizarTareas();
```

## Pruebas realizadas

| Acción | Resultado esperado | Cumple |
|---|---|---|
| Agregar una tarea llamada "Estudiar JavaScript". | Se agrega una tercera tarea y el contador aumenta a 3. | Sí |
| Presionar el botón "Completar". | El texto aparece tachado y el botón cambia a "Reabrir". | Sí |
| Presionar el botón "Eliminar". | La tarea desaparece y el contador disminuye. | Sí |

## ¿Por qué diseñé así mi clase?

La clase `Tarea` utiliza los atributos `descripcion` y `completada` para almacenar el contenido y el estado de cada tarea.

El método `crearElemento()` permite representar cada objeto en la página mediante elementos HTML creados con `createElement()`. De esta manera, se facilita la organización y reutilización del código.