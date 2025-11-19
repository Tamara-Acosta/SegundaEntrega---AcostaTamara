
//  los datos de los profesionales dentro de un array
const equipoProfesional = [
    {
        nombre: "Lic. Tamara Acosta",
        especialidad: "Psicología Infantil y Adolescente",
        trayectoria: "Más de 10 años en el campo del neurodesarrollo y apego seguro. Especialista en TCC.",
        imagen: "../recursos/psico.jfif" 
    },
    {
        nombre: "Lic. Mariel Garcia",
        especialidad: "Terapia Ocupacional",
        trayectoria: "Experiencia en integración sensorial y habilidades de la vida diaria. Certificado en Nivel 1 de T. O.",
        imagen: "../recursos/terapista.jfif"
    },
    {
        nombre: "Lic. Dario Ramos",
        especialidad: "Fonoaudiología",
        trayectoria: "Enfoque en dificultades de lenguaje expresivo y comprensivo y problemas de deglución. Máster en Deglución.",
        imagen: "../recursos/imagenfono.jfif"
    }
];

//llama al contenedor del DOM - nosotros.html
const contenedorEquipo = document.getElementById('contenedor-equipo'); 

// for Each para iterar / recorrer
if (contenedorEquipo) {
    // Iteracion sobre el array de profesionales para generar el HTML dinámico
    equipoProfesional.forEach(profesional => {
        
        // el html de la tarjeta de cada profesional
        const tarjetaHTML = `
            <article class="tarjeta-profesional">
                <img src="${profesional.imagen}" alt="Foto de ${profesional.nombre}">
                <h2>${profesional.nombre}</h2>
                <h3>${profesional.especialidad}</h3>
                <p>${profesional.trayectoria}</p>
            </article>
        `;

        //  html en el contenedor
        contenedorEquipo.innerHTML += tarjetaHTML;
    });
} else {
    // si hay un error, que me lo muestre en la consola 
    console.error("Error: No se encontró el contenedor con el ID 'contenedor-equipo'.");
}