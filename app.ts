// Znajdź element HTML o identyfikatorze 'message'
const messageElement = document.getElementById('message');

// Sprawdź, czy element istnieje, aby uniknąć błędów
if (messageElement) {
    // Ustaw zawartość tekstową elementu
    messageElement.textContent = "Hello, World!";
}