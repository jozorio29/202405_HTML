var botonCambiar = document.getElementById("iniciar_sesion");

botonCambiar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

var botonDesaparecer = document.getElementById("agregar_difinicion");

botonDesaparecer.addEventListener("click", function() {
    botonDesaparecer.style.display = 'none';
}); 

function clickAnimal(animal) {
    if(animal == 1) {
        var contador = parseInt(document.getElementById("count_cat").innerText);
        contador += 1;
        document.getElementById("count_cat").innerText = contador;
    }

    if(animal == 2) {
        var contador = parseInt(document.getElementById("count_perro").innerText);
        contador += 1;
        document.getElementById("count_perro").innerText = contador;
    };
};

function liked (animal) {
    if(animal == 1) {
    alert("Gato Atigrado was liked");
} else {
    alert("Golden Retriever was liked");
}
}