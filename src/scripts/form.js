function preselectProgramaFromURL() {
    const params = new URLSearchParams(window.location.search);
    const select = document.querySelector('select[name="programa"]');
    const programa = params.get('programa');
    if (!programa) return;

    const programasHabilitadosPreseleccion = ['arte', 'aprender', 'familia'];
    const programaDefault = 'otros';

    if (programasHabilitadosPreseleccion.includes(programa)) {
        select.value = programa;
    } else {
        select.value = programaDefault;
    }

    // scrollear suavemente al select preseleccionado para mejorar la experiencia de usuario
    select.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

preselectProgramaFromURL();