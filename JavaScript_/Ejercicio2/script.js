var imagenes = document.querySelectorAll(".imagenEliminar");

imagenes.forEach(function(imagenes) {
    imagenes.addEventListener("click", function() {
        this.remove();
    });
});