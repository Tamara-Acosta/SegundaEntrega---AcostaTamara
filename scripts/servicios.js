// array con el contenido de los servicios
const listaServicios = [
    {
        titulo: "Psicología Clínica",
        icono: "bx bxs-brain", // Icono de Boxicons para Psicología
        descripcion: "Ofrecemos terapia cognitivo-conductual (TCC), sistémica y enfoques humanistas. Abordamos ansiedad, depresión, duelos y conflictos familiares. Se trabaja en sesiones individuales y, si es necesario, con orientación a padres.",
    },
    {
        titulo: "Fonoaudiología",
        icono: "bx bxs-chat", // Icono de Boxicons para Comunicación/Lenguaje
        descripcion: "Especializados en trastornos del habla, retraso del lenguaje, dificultades en la lectoescritura y problemas de deglución. Intervención temprana y sesiones adaptadas a la necesidad de cada paciente.",
    },
    {
        titulo: "Terapia Ocupacional",
        icono: "bx bx-walk", // Icono de Boxicons para Actividad/Movimiento
        descripcion: "Trabajamos la integración sensorial, motricidad fina y gruesa, y el desarrollo de habilidades de la vida diaria (vestido, alimentación, juego). Esencial para niños con desafíos en la coordinación o procesamiento sensorial.",
    },
];

// FUNCIÓN PARA LA GENERACIÓN DE CONTENIDO
// CON EL GET ELEMENT BY ID LLAMO A MI CONTENEDOR-SERVICIOS DE SERVICIOS.HTML
const contenedorServicios = document.getElementById('contenedor-servicios');

// forEach para iterar / recorrer los elementos 
function generarServiciosHTML() {
    if (!contenedorServicios) return;
    
    let htmlContent = '';
    
    listaServicios.forEach((servicio) => { 
        // Estructura de la tarjeta
        htmlContent += `
            <article class="servicio-item">
                <i class="${servicio.icono}"></i>
                <h2>${servicio.titulo}</h2>
                <p>${servicio.descripcion}</p> 
                <a href="./contacto.html" class="boton-contacto-secundario">Solicitar Turno</a>
            </article>
        `;
    });
    
    contenedorServicios.innerHTML = htmlContent;
}

// inicializacion
generarServiciosHTML();