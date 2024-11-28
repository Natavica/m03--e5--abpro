fetch('./assets/js/equipo.json')
  .then(response => {
    if (!response.ok) { 
    }
    return response.json(); 
  })
  .then(data => { 

    const clonedData = JSON.parse(JSON.stringify(data)); 


    clonedData.forEach(medico => { 
      if (medico.especialidad === "Otorrinolaringología") {
        medico.especialidad = "Ortodoncia";
      }
    });

    const mergedData = data.map(original => {
      const updated = clonedData.find(clone => clone.nombre === original.nombre);
      return updated ? updated : original;
    });

    console.log('Datos originales:');
    console.log(data);

    console.log('Datos modificados:');
    console.log(clonedData);

    console.log('Datos fusionados (sobrescritos):');
    console.log(mergedData);
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
