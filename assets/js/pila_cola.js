class Pila {
    data = [];

    push (elemento) {
      
        this.data.push(elemento);
        
    }
    pop() {
        return this.data.pop();
    }
    
    length() {
        return this.data.length;
    }

}

class Cola {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    length() {
      return this.queue.length;
    }
  }

function obtenerFechaHoraActual() {
    const ahora = new Date();
    const opciones = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('es-ES', opciones).format(ahora);
  }
  
  function renderizarPacientes(pacientes) {
    let salida = '';
  
    for (const paciente of pacientes) {
      salida += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${paciente.nombre}</h5>
          <p class="card-text">${paciente.fechaHora}</p>
        </div>
      </div>
      `;
    }
  
    return salida;
  }


  const titlePage = 'Citas de pacientes';
  console.log(`Cargando ${titlePage}`);
  
  const tabla = document.querySelector('#listado-citas tbody');
  
  console.log(tabla);
  
  const pila = new Pila();
  
  console.log('agregando datos a la pila');

pila.push({
    rut: '44444444-4',
    nombre: 'juanito',
    fecha: '27-11-2024',
    hora: '09:00'
});

pila.push({
    rut: '33333333-3',
    nombre: 'juanito',
    fecha: '27-11-2024',
    hora: '09:00'
});

pila.push({
    rut: '22222222-2',
    nombre: 'juanito',
    fecha: '27-11-2024',
    hora: '09:00'
});

pila.push({
    rut: '11111111-1',
    nombre: 'juanita',
    fecha: '27-11-2024',
    hora: '09:00'
});

console.log('renderizar datos de pila');

let contenido = '';

let contador = 1;

while (pila.length() > 0) {
    const paciente = pila.pop();
    
    contenido = contenido + `
    <tr>
      <td>${contador}</td>
       <td>${paciente.rut}</td>
       <td>${paciente.nombre}</td>
       <td>${paciente.fecha}</td>
       <td>${paciente.hora}</td>
    </tr>
    `;
    contador++;
}

tabla.innerHTML = contenido;

const botonAgendar = document.getElementById('agendar');

const cola = new Cola();

botonAgendar.addEventListener('click', () => {
    const nombre = document.getElementById('nombre');
  
    if (nombre.value.length === 0) {
      alert('Nombre no válido');
      return;
    }
  
    const dato = {
      nombre: nombre.value,
      fechaHora: obtenerFechaHoraActual(),
    };
  
    cola.enqueue(dato);
  
    const contenido = renderizarPacientes(cola.queue);
    document.getElementById('pacientes-por-atender').innerHTML = contenido;
    nombre.value = '';
  });

  const botonAtender = document.getElementById('atender');

  botonAtender.addEventListener('click', () => {
    if (cola.isEmpty()) {
      alert('No hay mas pacientes');
      return;
    }
  
    cola.dequeue();
  
    const contenido = renderizarPacientes(cola.queue);
    document.getElementById('pacientes-por-atender').innerHTML = contenido;
  });

const outputEventosAsync = document.getElementById("eventos-async-output");

/*Funcion asincrona para obtener info de doctores*/
async function obtenerDoctores(url) {
  try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener datos");
      const datos = await response.json();
      //const doc = response.forEach(doctors)
      const doctor = datos.find(element => element.name === "Kurtis Weissnat");
      console.log("Estos son todos los datos obtenidos por API REST JSON: \n");
      console.log(datos);
      console.log('Se pide sólo la info del doctor "Kurtis Weissnat": \n');
      console.log(doctor);
      return response;
  } catch (error) {
      console.error("Error:", error.message);
  }
}

const url = "https://jsonplaceholder.typicode.com/users";

/**
 * 2. Uso de Callback
 * Un callback es una función pasada como argumento a otra función que se ejecuta luego de que una acción ocurre.
 */
function operacionAsincrona(callback) {
  setTimeout(() => {
    const resultado = obtenerDoctores(url);
    console.log(resultado);
    outputEventosAsync.textContent = resultado;
    callback();
  }, 2000); // Simula un tiempo de espera de 2 segundos
}

function ejecutarCallback() {
  operacionAsincrona(() => {
    console.log("Callback ejecutado después de la operación");
    outputEventosAsync.textContent +=
      "\nCallback ejecutado después de la operación";
  });
}

/**
 * 3. Uso de Promesas
 * Una promesa representa el resultado eventual de una operación asincrónica.
 */
function operacionConPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = obtenerDoctores(url);
      if (exito) {
        resolve("Operación exitosa con Promesa");
      } else {
        reject("Error en la operación con Promesa");
      }
    }, 2000);
  });
}

function ejecutarPromesa() {
  operacionConPromesa()
    .then((mensaje) => {
      console.log(mensaje);
      outputEventosAsync.textContent = mensaje;
    })
    .catch((error) => {
      console.error(error);
      outputEventosAsync.textContent = error;
    });
}

/**
 * 4. Async/Await
 * Sintaxis simplificada para trabajar con promesas.
 */
async function operacionAsync() {
  try {
    const resultado = await operacionConPromesa();
    console.log("Resultado async/await:", resultado);
    outputEventosAsync.textContent = `Resultado async/await: ${resultado}`;
  } catch (error) {
    console.error("Error:", error);
    outputEventosAsync.textContent = `Error: ${error}`;
  }
}

// Asignamos las funciones a 'window' para hacerlas accesibles en el HTML
window.ejecutarCallback = ejecutarCallback;
window.ejecutarPromesa = ejecutarPromesa;
window.operacionAsync = operacionAsync;