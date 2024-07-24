$(document).ready(function() {
    // Animación al hacer scroll
    $(window).scroll(function() {
        // Animación de fade-in
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });

        // Botón Volver Arriba
        if ($(this).scrollTop() > 100) {
            $('#btn-back-to-top').fadeIn();
        } else {
            $('#btn-back-to-top').fadeOut();
        }
    });

    // Filtro de proyectos
    $('.filter-btn').on('click', function() {
        var category = $(this).data('category');
        $('.project-item').hide();
        $('.project-item[data-category="' + category + '"]').fadeIn();
    });

    $(document).ready(function() {
        // Validación y manejo del formulario
        $('#contact-form').on('submit', function(event) {
            var nombre = $('#nombre').val();
            var email = $('#email').val();
            var mensaje = $('#mensaje').val();
    
            if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
                alert('Por favor completa todos los campos.');
                event.preventDefault(); // Evita el envío del formulario
            } else {
                // Mostrar una alerta de éxito
                alert('¡Gracias por tu mensaje! Pronto recibirás una respuesta.');
                $('#contact-form')[0].reset(); 
                event.preventDefault(); // Evita el envío del formulario
            }
        });
    });

    // Mostrar el año actual en el footer
    $('#current-year').text(new Date().getFullYear());
});
