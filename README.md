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

Revisar *filter.js* y se muestra en *equipo.html*, específicamente en el div que contiene el id="doctor-list"

*Uso de JSON para Manejo de Información*

El código utiliza un archivo JSON (./assets/js/equipo.json) como fuente de información para los doctores. Este archivo contiene detalles como el nombre, especialidad, experiencia, disponibilidad, horarios y costos de cada doctor.

*Simulación de Obtención de Datos desde una API REST*

El código utiliza fetch() para simular la obtención de datos desde una API REST. Aunque los datos están almacenados localmente en el archivo JSON, el uso de fetch() imita cómo un cliente web solicita datos desde un servidor.

*Carga Dinámica de Información en la Interfaz*

Los datos obtenidos del JSON se procesan y se generan dinámicamente elementos HTML para mostrar la información de los doctores en la página. Esto se logra con el método displayDoctors(), que utiliza document.createElement y actualiza el DOM.

*Operaciones con los Datos JSON*

*Recorrido de Datos* (Revisar en la consola de equipo.html)

El código recorre el JSON utilizando métodos como forEach() para iterar sobre los doctores y procesar su información.

*Clonación y Fusión* (Revisar en la consola de equipo.html)

Aunque no hay ejemplos explícitos de clonación o fusión en el código compartido, es posible implementar estas operaciones, por ejemplo, para duplicar datos o combinar información de varias fuentes JSON.


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

En `pila_cola.js` se implementó una parte implícita de la simulación del registro de citas: la obtención de la información de un doctor. 
Se crearon botones visibles en la vista `citas.html` que utilizando elementos de programacion asincrona obtienen la info de su eminencia el "Dr. Kurtis Weissnat". Se emplean async/await, promesas y event listeners asociados a cada botón.
