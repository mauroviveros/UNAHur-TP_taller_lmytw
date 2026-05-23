
function updateTime() {
    const timeElement = document.getElementById("time-now");
    const now = new Date();
    
    timeElement.textContent = now.toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    timeElement.setAttribute("datetime", now.toISOString());
}

updateTime();
