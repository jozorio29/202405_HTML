document.addEventListener('DOMContentLoaded', function() {
    var modoBTN = document.getElementById('modoBtn');
    modoBTN.addEventListener('click', toggleModo);
});

function toggleModo() {
    var body = document.body;

    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        modoBTN.innerText = "Modo Claro";
    } else {
        modoBTN.innerText = "Modo Claro";
    }
}