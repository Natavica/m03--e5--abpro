// Inicializamos un arreglo vacío de médicos
let medicos = [];

// Variable para almacenar el índice del médico que estamos editando (si aplica)
let medicoEditandoIndex = null;

// Función para mostrar los médicos en una tabla del DOM
function mostrarMedicos(medicosAMostrar = medicos, conAcciones = true, tablaId = "tablaMedicos") {
  // Seleccionamos la tabla donde se mostrarán los médicos
  const tablaMedicos = document.getElementById(tablaId).getElementsByTagName('tbody')[0];
  tablaMedicos.innerHTML = ""; // Limpiar la tabla antes de mostrarla

  // Recorrer los médicos en el arreglo y mostrarlos en la tabla
  medicosAMostrar.forEach((medico, index) => {
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${medico.nombre}</td>
      <td>${medico.especialidad}</td>
      <td>${medico.experiencia}</td>
      <td>${medico.disponibilidad}</td>
      ${conAcciones ? `
        <td>
          <button onclick="editarMedico(${index})">Editar</button>
          <button onclick="eliminarMedico(${index})">Eliminar</button>
        </td>` : ''} 
    `;

    tablaMedicos.appendChild(fila);
  });

  // Mostrar el arreglo en la consola cada vez que se actualiza
  console.log(medicos);
}

// Función para agregar un nuevo médico o actualizar uno existente
document.getElementById("formMedico").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const nombre = document.getElementById("nombre").value;
  const especialidad = document.getElementById("especialidad").value;
  const experiencia = document.getElementById("experiencia").value;
  const disponibilidad = document.getElementById("disponibilidad").value;

  // Si estamos editando un médico, actualizamos sus datos
  if (medicoEditandoIndex !== null) {
    medicos[medicoEditandoIndex] = {
      nombre,
      especialidad,
      experiencia,
      disponibilidad
    };
    medicoEditandoIndex = null; // Restablecemos el índice después de editar
  } else {
    // Si no estamos editando, agregamos un nuevo médico
    const nuevoMedico = {
      nombre,
      especialidad,
      experiencia,
      disponibilidad
    };
    medicos.push(nuevoMedico);
  }

  // Limpiamos los campos del formulario
  document.getElementById("formMedico").reset();

  // Cambiamos el texto del botón de "Agregar" a "Actualizar"
  document.querySelector("button[type='submit']").textContent = "Agregar Médico";

  // Actualizamos la vista de los médicos en la tabla principal
  mostrarMedicos();
});

// Función para editar un médico
function editarMedico(index) {
  const medico = medicos[index];

  // Rellenamos los campos del formulario con los datos del médico
  document.getElementById("nombre").value = medico.nombre;
  document.getElementById("especialidad").value = medico.especialidad;
  document.getElementById("experiencia").value = medico.experiencia;
  document.getElementById("disponibilidad").value = medico.disponibilidad;

  // Guardamos el índice del médico que estamos editando
  medicoEditandoIndex = index;

  // Cambiamos el texto del botón a "Actualizar Médico"
  document.querySelector("button[type='submit']").textContent = "Actualizar Médico";
}

// Función para eliminar un médico
function eliminarMedico(index) {
  // Eliminamos el médico del arreglo
  medicos.splice(index, 1);

  // Actualizamos la vista de los médicos
  mostrarMedicos();
}

// Función para buscar un médico por nombre
function buscarMedico() {
  const nombreBusqueda = document.getElementById("buscarNombre").value.toLowerCase(); // Obtenemos el valor del campo de búsqueda

  // Filtramos el arreglo de médicos según el nombre
  const medicosEncontrados = medicos.filter(medico => medico.nombre.toLowerCase().includes(nombreBusqueda));

  // Mostramos solo los médicos encontrados en la tabla de búsqueda (sin botones de acciones)
  mostrarMedicos(medicosEncontrados, false, "tablaBusqueda");
}

// Agregar el evento al botón de búsqueda
document.getElementById("buscarBtn").addEventListener("click", buscarMedico);

// Inicializamos la tabla con los médicos (en este caso, está vacía al principio)
mostrarMedicos();
