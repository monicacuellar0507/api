"use strict";
//POO - Herencia
class estacionamiento {
  constructor(idVehiculo){
    this.idVehiculo = idVehiculo;
    this.cantVehiculos = 75;
  }
  static get infoEstacionamiento (){
    console.log(`Vehiculos Del Estacionamiento F&W SA`);
  }
  set cantidad(value){
    this.cantVehiculos -= value;
  }
  get cantidad(){
    return this.cantVehiculos;
  }
}

class vehiculo extends estacionamiento {
  constructor(idVehiculo, modelo, marca, color) {
    super(idVehiculo)
    this.modelo = modelo;
    this.marca = marca;
    this.color = color;
  }
  vender() {
    this.cantidad=1;
    console.log(`El Vehiculo ${this.idVehiculo} De Marca ${this.marca} Modelo ${this.modelo} Se Ha Vendido`);
    console.log('Quedan: ' + this.cantidad + ' Vehiculos En El Conseccionario');
  }

  mensaje(){
    console.log(`Bienvenido...`);
    console.log(`Actualmente En El Conseccionario Hay: ${this.cantidad} Vehiculos`)
  }

  descripcion(){
    console.log(`El Vehiculo ${this.idVehiculo} De Marca ${this.marca} Es De Color ${this.color}`);
  }
}
 const automovil = new vehiculo('1111',2020, 'Kia Cerato Pro', 'Rojo');
 const camioneta = new vehiculo('12345',2022, 'Kia Sportage', 'Gris Plata');
 const moto = new vehiculo('54321',2021, 'BWS X', 'Fuscia');

 moto.mensaje();
 automovil.vender();
 automovil.vender();
 automovil.vender();
 camioneta.descripcion();

