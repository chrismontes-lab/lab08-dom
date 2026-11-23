
# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: Google Chrome

## Ejercicio 2: Seleccionar y modificar el DOM


| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|---|---|---|
| textContent desde app.js | El título cambió a Hola TECSUP. | Sí |
| style.color | El título cambió a color azul. | Sí |

**Observación:** También se agregó JavaScript a la lista y se resaltó el párrafo con un fondo amarillo. Los cambios se mantienen al recargar porque están programados en app.js.


## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara | Cuánto suma por acción |
|---|---|---|
| click | Presionar una vez el botón. | 1 |
| dblclick | Hacer doble clic en el botón. | 1 |
| mouseover | Pasar el cursor sobre el botón. | 1 por cada entrada del cursor |

**Observación:** La propiedad evento.type muestra el tipo de evento que ocurrió, mientras que evento.target identifica el elemento HTML que recibió el evento, en este caso, el botón Sumar 1.

## Ejercicio 4: Eventos input y submit

Se implementaron eventos para detectar la escritura en campos de texto y el envío de formularios.

| Prueba | Qué pasó en la pantalla | Se recargó la página (Sí/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo cambió automáticamente mientras se escribía el nombre. | No |
| Enviar sin preventDefault | El mensaje Enviado apareció brevemente y desapareció al recargarse la página. | Sí |
| Enviar con preventDefault, correo sin @ | Apareció el mensaje "Correo no valido: falta @" en rojo. | No |
| Enviar con preventDefault, correo con @ | Apareció el mensaje "Enviado: christian@gmail.com". | No |

## Ejercicio 5: Clases y objetos

En este ejercicio se implementó una clase llamada `Producto` utilizando JavaScript. Se definió un constructor para almacenar el nombre y precio de cada producto, además de los métodos `conDescuento()` y `descripcion()`.

Se crearon tres objetos: laptop, mouse y teclado. Posteriormente, se probaron sus métodos desde la consola del navegador para comprobar su funcionamiento.

### Tabla de resultados

| Objeto | nombre | precio | conDescuento(0.25) |
|---|---|---:|---:|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |

Adicionalmente, se creó un cuarto objeto llamado Monitor, con un precio de S/ 680, y se agregó al arreglo de productos para mostrarlo en la página web.

### Ventaja de utilizar clases y objetos

Utilizar clases permite crear varios objetos con una misma estructura, evitando repetir código para cada producto.

Además, facilita la organización, reutilización y mantenimiento del código cuando se agregan nuevos productos.

### Captura del resultado

![Resultado del ejercicio 5](../capturas/Ejercicio%205.png)