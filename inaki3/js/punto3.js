// ejercicio 3
const resultados = []

function lanzarDados() {
    const dado1 = Math.floor(Math.random() * 6)+ 1;
    const dado2 = Math.floor(Math.random() * 6)+ 1;
    return dado1 + dado2;
}

for (let i = 0; 1 < 50; i++) {
    let suma = lanzarDados();
    if (resultados[suma] === undefined) {
        resultados[suma] - 1;
    } else {
        resultados[suma]++;
    }
}

document.write("<h2> Suma - Apariciones</h2>")
document.write("<ul>");
for(let j = 2; j <= 12; j++) {
    document.write("<li>" + j + "-" + (resultados[j] || 0) + "</li>)");
}
document.write("</ul>")