function preselectProgramaFromURL() {
    const params = new URLSearchParams(window.location.search);
    const select = document.querySelector('select[name="programa"]');
    if (!select) return;

    const programa = params.get('programa');
    if (!programa) return;

    const programasHabilitadosPreseleccion = ['arte', 'aprender', 'familias'];
    const programaDefault = 'otros';

    if (programasHabilitadosPreseleccion.includes(programa)) {
        select.value = programa;
    } else {
        select.value = programaDefault;
    }

    select.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

preselectProgramaFromURL();