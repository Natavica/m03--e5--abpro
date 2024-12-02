fetch('./assets/js/equipo.json') // Nueva ruta al JSON
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('doctor-list');
        const filter = document.getElementById('specialty-filter');

        // Función para mostrar los doctores
        function displayDoctors(doctors) {
            container.innerHTML = ''; // Limpiar el contenedor
            doctors.forEach(doctor => {
                const doctorDiv = document.createElement('div');
                doctorDiv.classList.add('doctor');

                doctorDiv.innerHTML = `
          <img src="${doctor.foto}" class="card__img"  alt="Foto de ${doctor.nombre}">
          <div>
            <h2>${doctor.nombre}</h2>
            <p><strong>Especialidad:</strong> ${doctor.especialidad}</p>
            <p><strong>Reseña:</strong> ${doctor.resena}</p>
            <p><strong>Experiencia:</strong> ${doctor.experiencia}</p>
            <p><strong>Disponibilidad:</strong> ${doctor.disponibilidad}</p>
            <p><strong>Horario:</strong> ${doctor.horario}</p>
            <p><strong>Contacto:</strong> ${doctor.contacto}</p>
            <p><strong>Valor base consulta:</strong> ${valorCLP(doctor.costo.base)}</p>
            <p><strong>Valor c/bonificación:</strong> ${calcularBonificacion(doctor)}</p>
          </div>
        `;
                container.appendChild(doctorDiv);
            });
        }

        // Mostrar todos los doctores al inicio
        displayDoctors(data);

        // Filtrar según especialidad
        filter.addEventListener('change', () => {
            const selectedSpecialty = filter.value;
            const filteredDoctors = selectedSpecialty
                ? data.filter(doctor => doctor.especialidad === selectedSpecialty)
                : data; // Si no hay selección, mostrar todos
            displayDoctors(filteredDoctors);
        });
    })

const clp = new Intl.NumberFormat("es-ES", 
{
    style:'currency', currency: 'CLP'}
);

function valorCLP(valor)
{
    return clp.format(valor);
}

function calcularBonificacion(doctor)
{
    const aplicarBonificacion = (costo) => (descuento) => costo - costo * descuento;
    const valorConBonificacion = (costo) => aplicarBonificacion(costo)(doctor.costo.bonificacion)
    return valorCLP(valorConBonificacion(doctor.costo.base))
}