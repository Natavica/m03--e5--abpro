// Seleccionamos el área de salida para la sección de POO
const outputPOO = document.getElementById("poo-output");

/**
 * 1. Clase Doctor
 */
class Doctor {
  constructor(nombre, especialidad, anos_exp, costo_consulta) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    if(anos_exp < 0)
        this.anos_exp = 0;
    else
        this.anos_exp = anos_exp;
    this.costo_consulta = costo_consulta;
    this.arrayPacientes = [];
    this.arrayAgenda = [];
    this.arrayHorario = [];
  }

  get experiencia() {
    return this._experiencia;
  }

  set experiencia(valor) {
    if (valor < 0) throw new Error("La experiencia no puede ser negativa.");
    this._experiencia = valor;
  }

  info() {
    return `Nombre: ${this.nombre}, especialidad: ${this.especialidad}, experiencia: ${this.anos_exp} años.`;
  }

  setPacientes(pacientes) {
    this.arrayPacientes = pacientes;
  }

  getPacientes() {
    return this.arrayPacientes;
  }

  AddPaciente(paciente) {
    this.arrayPacientes.push(paciente);
  }

  getCantidadPacientes() {
    return this.arrayPacientes.length;
  }

  getCostoConsulta() {
    return this.costo_consulta;
  }

  setCostoConsulta(valor) {
    if (valor < 0) throw new Error("El costo no puede ser negativo.");
    return this.costo_consulta = valor;
  }

  getAgenda() {
    return this.arrayAgenda;
  }

  setAgenda(arrayAgenda) {
    this.arrayAgenda = arrayAgenda;
  }

  AddToAgenda(id, rut_paciente, nombre, fecha, hora)
  {
    datos = `{id: ${id}, rut: ${rut_paciente}, nombre: ${nombre}, fecha: ${fecha}, hora: ${hora} }`;
    this.arrayAgenda.push(datos);
  }
};

function getDoctoresJSON(){
  let drs = [];
  fetch('./assets/js/equipo.json')
    .then(response => {
      if (!response.ok) { 
      }
      return response.json(); 
    })
    .then(data => {
        function readDoctors(doctors) {
          doctors.forEach(doctor => {
            drs.push(new Doctor(doctor.nombre, doctor.especialidad, doctor.experiencia, doctor.costo.base));
          })
        }
        readDoctors(data);
       }).catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
    return drs;
  };
const doctores = getDoctoresJSON();
console.log(doctores);
/**
 * 2. Subclase Cirujano
 * Definición de una subclase que extiende la clase Doctor.
 */
class Cirujano extends Doctor {
  constructor(nombre, especialidad, anos_exp, costo_consulta) {
    super(nombre, especialidad, anos_exp, costo_consulta); // Llama al constructor de la clase padre
    this.arrayOperaciones = [];
  }

  // Sobrescribir el método saludar para incluir información adicional
  info() {
    return `Nombre: ${this.nombre}, especialidad: Cirugía ${this.especialidad}, experiencia: ${this.anos_exp} años.`;  
  }

  getOperaciones() {
    return this.arrayOperaciones;
  }
  getCantidadOperaciones() {
    return this.arrayOperaciones.length;
  }
}

/**
 * 3. Subclase Pediatra
 * Definición de otra subclase que extiende la clase Doctor.
 */
class Pediatra extends Doctor {
  constructor(nombre, anos_exp, costo_consulta) {
    super(nombre, "Pediatría", anos_exp, costo_consulta); // Llama al constructor de la clase padre
    this.arrayOperaciones = [];
  }

  // Sobrescribir el método saludar para incluir información adicional
  info() {
    return `${super.info()}`;
  }
}

function crearObjetoConClase() {
  const conan = new Doctor("Conan", "Carnicero", 20);
  const mensaje = conan.info();
  console.log("Doctor:", mensaje);
  const paciente = {nombre: "Ana", fecha: "01-09-2024", hora: "12:00", descripción: "consulta"};
  conan.getPacientes().push(paciente);
  console.log("Doctor:", conan.getPacientes());
  const pac = conan.getCantidadPacientes();
  outputPOO.textContent = `Doctor:\n${mensaje}\n pacientes atendidos: ${pac}`;

}

function demostrarHerencia() {
  const maria = new Cirujano("María", "Digestiva", 15);
  const mensaje = maria.info();
  console.log("Herencia:", mensaje);
  const operacion = {nombre: "Juan", fecha: "13-10-2024", descripción: "Extraccion de higado"};
  maria.getOperaciones().push(operacion);
  const oper = maria.getCantidadOperaciones();
  console.log("Herencia:", maria.getOperaciones());
  console.log("Operaciones realizadas:", oper);

  const paciente1 = {nombre: "Luis", fecha: "11-10-2024", hora: "11:00", descripción: "consulta1"};
  const paciente2 = {nombre: "Hugo", fecha: "17-10-2024", hora: "11:20", descripción: "consulta2"};
  maria.getPacientes().push(paciente1);
  maria.getPacientes().push(paciente2);
  const pac = maria.getCantidadPacientes();
  console.log("Herencia:", maria.getPacientes());
  outputPOO.textContent = `Herencia:\n${mensaje}\nPacientes atendidos: ${pac}\nOperaciones realizada: ${oper}`;
}

window.crearObjetoConClase = crearObjetoConClase;
window.demostrarHerencia = demostrarHerencia;