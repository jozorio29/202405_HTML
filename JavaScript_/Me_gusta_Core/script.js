function clickMegusta(megusta) {
    if(megusta == 1) {
        var contador = parseInt(document.getElementById("meGustaLinn").innerText);
        contador += 1;
        document.getElementById("meGustaLinn").innerText = contador;
    }

    if(megusta == 2) {
        var contador = parseInt(document.getElementById("meGustaLina").innerText);
        contador += 1;
        document.getElementById("meGustaLina").innerText = contador;
    }

    if(megusta == 3) {
        var contador = parseInt(document.getElementById("meGustaMateo").innerText);
        contador += 1;
        document.getElementById("meGustaMateo").innerText = contador;
    }

}