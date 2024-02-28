
// Definición de "cuenta"
const cuenta = {
    titular: "Alex",
    saldo: 0,
    ingresar: function(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            document.write("<p>Se han ingresado $" + cantidad + " a la cuenta.</p>");
        } else {
            document.write("<p>La cantidad a ingresar debe ser mayor que 0.</p>");
        }
    },
    extraer: function(cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            document.write("<p>Se han extraído $" + cantidad + " de la cuenta.</p>");
        } else {
            document.write("<p>No es posible extraer esa cantidad de dinero.</p>");
        }
    },
    informar: function() {
        document.write("<p>Titular: " + this.titular);
        document.write("<p>Saldo: $" + this.saldo);
    }
};

// Mostrar la descripción inicial del estado de la cuenta
document.write("<p>Descripción inicial del estado de la cuenta:</p>");
cuenta.informar();

// Ingresar dinero a la cuenta
cuenta.ingresar(100);
cuenta.informar();

// Extraer dinero de la cuenta
cuenta.extraer(50);
cuenta.informar();


