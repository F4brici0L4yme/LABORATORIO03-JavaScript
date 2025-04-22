function daysLeftToArequipaDay() {
    const today = new Date();
    const currentYear = today.getFullYear();

    const arequipaDate = new Date(currentYear, 7, 15);

    const msLeft = arequipaDate - today;
    const leftDays = Math.ceil(msLeft / (1000 * 60 * 60 * 24));

    document.getElementById("today").textContent = today.toDateString();
    document.getElementById("arequipasDay").textContent = `¡Faltan ${leftDays} días para el Día de Arequipa!`;

    console.log(`Hoy es: ${today.toDateString()}`);
    console.log(`Faltan ${leftDays} días para el Día de Arequipa`);
}