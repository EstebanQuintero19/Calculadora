//arreglo con 15 posiciones en desorden

const arreglo = [7, 2, 14, 1, 10, 5, 12, 4, 15, 9, 3, 13, 6, 8, 11];

function buscarNumero(arreglo, numero) {
    let encontrado = false;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            encontrado = true;
            break;
        }
    }
    return encontrado;
}

function sumarNumeros(arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}