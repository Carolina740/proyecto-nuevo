document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    const estadoDiv = document.getElementById('mensajeEstado');

    function manejarClick() {

        if (boton.classList.contains('btn-warning')) {
            boton.textContent = '¡Gracias! Contactaremos contigo.';
            boton.classList.remove('btn-warning');
            boton.classList.add('btn-primary'); 

            estadoDiv.style.display = 'block';
            estadoDiv.textContent = '¡Evento click registrado con éxito!';
            estadoDiv.classList.remove('alert-success');
            estadoDiv.classList.add('alert-info'); 
            estadoDiv.style.color = 'black';

        } else {
            boton.textContent = '¡Empieza Ahora!';
            boton.classList.remove('btn-primary');
            boton.classList.add('btn-warning');

            estadoDiv.style.display = 'none';
            estadoDiv.textContent = '';
            estadoDiv.classList.remove('alert-info');
            estadoDiv.classList.add('alert-success');
        }
    }

    boton.addEventListener('click', manejarClick);
});