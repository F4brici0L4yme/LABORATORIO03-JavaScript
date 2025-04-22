function getDayName() {
    const DayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const date = new Date();
    const dayAsNumber = date.getDay();
    const dayName = DayNames[dayAsNumber];

    console.log(`Hoy es ${dayName}`);
    document.getElementById('dayNumber').innerHTML = `Hoy es el día número ${dayAsNumber} de la semana!`;
    document.getElementById('dayName').innerHTML = `Hoy es ${dayName}!`;
}
