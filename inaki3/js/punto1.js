// Crear un array con los nombres de los doce meses
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Mostrar los nombres de los meses en forma de lista
document.write("<ol>"); // Inicia la lista ordenada
for (let i = 0; i < meses.length; i++) {
    document.write("<li>" + meses[i] + "</li>"); // Agrega cada mes como un elemento de la lista
}
document.write("</ol>"); // Cierra la lista ordenada
