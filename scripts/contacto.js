
//funcionalidad foco / blur
document.addEventListener('DOMContentLoaded', () => {
    // Seleccion de todos los campos de entrada (input, textarea, select)
    const campos = document.querySelectorAll('#formulario-contacto input, #formulario-contacto textarea, #formulario-contacto select');

    campos.forEach(campo => {
        // Evento 'focus': Se dispara cuando el elemento hace click
        campo.addEventListener('focus', function() {
            this.classList.add('input-activo');
        });

        // Evento blur: Se aplica cuando el elemento pierde el foco
        campo.addEventListener('blur', function() {
            this.classList.remove('input-activo');
        });
    });
});

// confirmacion de envio del form
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario-contacto');
    
    if (formulario) {
        //   evento 'submit' cuando el usuario/cliente  hace clic en enviar
        formulario.addEventListener('submit', function(e) {
            //Previene el envío por defecto - recargaria la pag
            e.preventDefault(); 
            // Obtiene el valor de la solicitud seleccionada
            const selectAsunto = document.getElementById('asunto');
            const asuntoSeleccionado = selectAsunto.options[selectAsunto.selectedIndex].text;
            const nombre = document.getElementById('nombre-contacto').value || "Cliente";

            // mensaje de confirmación al final
            const mensajeConfirmacion = document.createElement('div');
            mensajeConfirmacion.classList.add('mensaje-confirmacion');
            mensajeConfirmacion.innerHTML = `
                <h2>¡Gracias por tu mensaje, ${nombre}!</h2>
                <p>Hemos recibido tu solicitud de: <strong>${asuntoSeleccionado}</strong>.</p>
                <p>Te responderemos a la brevedad.</p>
                <button onclick="window.location.reload()" class="boton-contacto">Volver</button>
            `;

            // Oculta el formulario y mostrar el mensaje
            const contenedorFormulario = formulario.closest('.contenedor-formulario');
            if(contenedorFormulario) {
                contenedorFormulario.innerHTML = ''; // Limpia el contenido anterior
                contenedorFormulario.appendChild(mensajeConfirmacion); 
                contenedorFormulario.style.textAlign = 'center';
            }
            
        });
    }
});