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
    return `Nombre: ${this.nombre}, especialidad: Cirujano ${this.especialidad}, experiencia: ${this.anos_exp} años.`;  
  }

  getOperaciones() {
    return this.arrayOperaciones;
  }
  getCantidadOperaciones() {
    return this.arrayOperaciones.length;
  }
};

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
};

const drs = new Array();
async function getDoctoresJSON(){
  await fetch('./assets/js/equipo.json')
    .then(response => {
      if (!response.ok) { 
      }
      return response.json(); 
    })
    .then(data => {
        function readDoctors(doctors) {
          doctors.forEach( (doctor,index) => {
            if(doctor.especialidad === "Cirugía") {
              drs[index] = new Cirujano(doctor.nombre, doctor.especialidad, doctor.experiencia, doctor.costo.base);              
              //drs.push(new Cirujano(doctor.nombre, doctor.especialidad, doctor.experiencia, doctor.costo.base));
              console.log(drs[index]);
            }
            else {
              drs[index] = new Doctor(doctor.nombre, doctor.especialidad, doctor.experiencia, doctor.costo.base);              
              //drs.push(new Doctor(doctor.nombre, doctor.especialidad, doctor.experiencia, doctor.costo.base));
              console.log(drs[index]);
            }
          })
        }
        readDoctors(data);
       }).catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
    console.log(drs);
    console.log(drs.length);
    outputPOO.textContent = `Doctores:\n${drs}`;
  };

function infoDocs() {
  resultado = "";
  drs.forEach(doctor => {resultado = resultado + doctor.info()+'\n';})
  outputPOO.textContent = resultado;
}

function costoDocs() {
  resultado = "";
  drs.forEach(doctor => {resultado = resultado + doctor.nombre + " " + doctor.getCostoConsulta()+'\n';})
  outputPOO.textContent = resultado;
}

function agendaDocs() {
  resultado = "";
  drs.forEach(doctor => {resultado = resultado + doctor.nombre + " " + doctor.getAgenda()+'\n';})
  outputPOO.textContent = resultado;
}

window.getDoctoresJSON = getDoctoresJSON;
window.infoDocs = infoDocs;
window.costoDocs = costoDocs;
window.agendaDocs = agendaDocs;