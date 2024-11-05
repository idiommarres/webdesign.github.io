// scripts/scripts.js

// Ініціалізація підказок Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});

// Функція для прокрутки до обраного розділу
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Функція для очищення форми та виведення повідомлення
function submitReservation() {
    // Очищаємо форму
    document.querySelector('#booking-form form').reset();
    
    // Показуємо сповіщення
    var bookingAlert = document.getElementById('bookingAlert');
    bookingAlert.classList.remove('d-none');
    bookingAlert.textContent = "Ваша резервація відправлена на опрацювання! невідомо куди, невідомо як";

    // Ховаємо alert через 3 секунди
    setTimeout(function() {
        bookingAlert.classList.add('d-none');
    }, 3000);
}