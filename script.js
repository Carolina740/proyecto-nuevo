document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const estadoDiv = document.getElementById('mensajeEstado');

    function manejarClick() {
        if (boton.classList.contains('btn-primary')) {
            boton.textContent = '¡Gracias por hacer click!';
            boton.classList.remove('btn-primary');
            boton.classList.add('btn-success');
            
            estadoDiv.style.display = 'block';
            estadoDiv.textContent = '¡Has interactuado correctamente con el botón!';
            estadoDiv.classList.remove('alert-info');
            estadoDiv.classList.add('alert-success');

        } else {
            boton.textContent = 'Haz Click Aquí de Nuevo';
            boton.classList.remove('btn-success');
            boton.classList.add('btn-primary');

            estadoDiv.style.display = 'none';
            estadoDiv.textContent = '';
            estadoDiv.classList.remove('alert-success');
            estadoDiv.classList.add('alert-info');
        }
    }

    boton.addEventListener('click', manejarClick);
});