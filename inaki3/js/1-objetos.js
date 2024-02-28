const auto = {
//propiedades
marca : "Porsche",
modelo : "Panamera" ,
anio : 2024,
color : "Rojo",
precio : "129.890 euros",
encendido : true,
apagado : true,
  //metodos
  encender: function () {
    console.log(this)
    document.write(`<p>El auto ${this.marca} está encendido...</p>`);
  },
    apagar: function () {
        document.write(auto)
        document.write(`<p>El auto ${this.marca} está apagado...</p>`);
      },
};

//mostrar el objeto
console.log(auto);
document.write(`<p>El auto es un  ${auto.marca}</p>`);
document.write(`<p>es modelo ${auto.modelo}</p>`);
document.write(`<p>del año ${auto.anio}</p>`);
document.write(`<p>es de color ${auto.color}</p>`);
document.write(`<p>tiene un precio de  ${auto.precio}</p>`);

