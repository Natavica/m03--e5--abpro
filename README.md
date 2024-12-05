## NOMBRE PROYECTO 
STAR WARS Hospital | Evaluación grupal ABPro Módulo 3

### Equipo
Grupo 4: Matias Espinoza, Nicolar Jaramillo, Javiera Allende, Natalia Albornoz y Carla García


## RESUMEN DEL PROYECTO
En este proyecto se integran todos los conceptos avanzados de JavaScript para mejorar y completar el sitio web del hospital. Se seleccionó el trabajo de Natalia Albornoz -STAR WARS Hospital- como base para poder implementar las tareas de la evaluación. Se implementa manipulación de datos, el uso de algoritmos y estructuras de datos, y la aplicación de programación funcional, asincrónica y orientada a objetos.


## ESTRUCTURA DE CARPETAS Y ARCHIVOS
- assets
    - images
    - js
        - clone.js
        - equipo.json
        - estructuraDatos.js
        - filter.js
        - navbar.js
        - pila_cola.js
        - prompt.js
    - scss
- citas.html
- contacto.html
- equipo.html
- gestion.html
- index.html

## DESCRIPCIÓN DE LAS TAREAS DE LA EVALUACIÓN E INSTRUCCIONES PARA EJECUTARLAS

### 1. Manipulación de Datos con JSON y Simulación de API REST

### 2. Implementación de Algoritmos y Estructuras de Datos

### 3. Programación Funcional

En `equipo.json`, para cada doctor se incluyó el costo base de su consulta y el porcentaje de bonificación al reservar una hora. 
En `filter.js` se implementó la función `calcularBonificacion()`, que utiliza currying y composición de funciones para realizar el cálculo del valor bonificado de la consulta de cada doctor. Este cálculo se muestra en las cards de los doctores al momento de mostrarlas dinámicamente en `equipo.html`.

Además, se reemplazó la impresión directa del arreglo de horarios por la función `imprimirHorario()`, que recursivamente agrega todos los horarios a un string y lo retorna una vez se recorre el arreglo completo. Esto nos permite mayor flexibilidad a la hora de desplegar la información.

### 4. Programación Orientada a Objetos

En `poo.json`, se crearon las clases solicitadas para Doctor, Cirujano, Pediatra. Se agregaron getter y setters solicitados. Se agregaron las funciones para devolver el costo de la consulta y la disponibilidad.

Se agregó una función que lee el archivo JSON de los Doctores y lo asigna a la clase correspondiente (en este caso habian 2 Cirujanos, los cuales se crearon de acuerdo a la info rescatada desde el JSON; el resto quedo como Doctor)

Para esto en la vista `citas.html` se agregaron 4 botones. 
El primero crea los objetos y los almacena en un array
Los siguientes botones hacen un recorrido del array empleando la funcion info(), getCosto() y getAgenda() respectivamente.  

### 5. Programación Asíncrona y Eventos 




