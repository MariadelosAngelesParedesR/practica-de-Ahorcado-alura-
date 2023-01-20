import {Cliente} from './cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = "José"
cliente.dniCliente = "123456";
cliente.rutCliente = "5-123456";


const cuentaDeJose = new cuentaCorriente(); 
cuentaDeJose.numero = '1';
cuentaDeJose.agencia = '007';
cuentaDeJose.cliente = cliente;



let saldo = cuentaDeJose.verSaldo();
console.log("El Saldo actual es " + saldo);

saldo.cuentaDeJose.despositoEnCuenta(5);
console.log("El saldo de la cuentas es " + saldo);
saldo.cuentaDeJose.retiroEnCuenta(100);
console.log("El saldo de la cuentas es " + saldo);


//////////////////////////////////

const cliente2 = new Cliente();
cliente2.nombreCliente = "Maria";
cliente2.dniCliente = "654321";
cliente2.rutCliente = "6-654321";

const cuentaDeMaria = new cuentaCorriente(); 
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

const saldoMaria = cuentaDeMaria.verSaldo();
console.log("El Saldo actual es " + saldo);



